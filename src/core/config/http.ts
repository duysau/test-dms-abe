import { ArgsProps } from "antd/lib/notification";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios, { AxiosError } from "axios";
import { REFRESH_TOKEN, TOKEN } from "config/const";
import { FORBIDDEN_ROUTE, LOGIN_ROUTE } from "core/config/consts";
import appMessageService from "core/services/common-services/app-message-service";
import dayjs from "dayjs";
import { default as Cookies } from "js-cookie";
import { Repository } from "react-3layer-common";

export const httpConfig: AxiosRequestConfig = {
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "X-TimeZone": dayjs().utcOffset() / 60,
  },
  baseURL: process.env.REACT_APP_BASE_API_URL,
};

const handleErrorRefreshToken = (
  error: AxiosError,
  notifyToast: (argsProps?: ArgsProps) => void
) => {
  if (error.response?.status === 401) {
    notifyToast({
      message: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.",
      type: "error",
    });
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem("profile");
    window.location.href = LOGIN_ROUTE;
  }
};

function queueRequestForToken(error: AxiosError): Promise<AxiosResponse> {
  return new Promise((resolve, reject) => {
    HttpInterceptor.requestsToRefresh.push((token) => {
      if (token) {
        error.config.headers["Authorization"] = `Bearer ${token}`;
        resolve(axios.request(error.config));
      } else {
        reject(error);
      }
    });
  });
}

class HttpInterceptor {
  static history: any;
  public setHistory(history: any) {
    HttpInterceptor.history = history;
  }
  static _retry = false;
  static requestsToRefresh: ((token: string) => void)[] = [];
  public async initialize(
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse,
    errorInterceptor?: (error: AxiosError) => void | Promise<void>
  ) {
    Repository.requestInterceptor =
      requestInterceptor ??
      function (config: AxiosRequestConfig): AxiosRequestConfig {
        const token = Cookies.get(TOKEN);
        if (config.data instanceof FormData) {
          config.headers["Content-Type"] = "multipart/form-data";
          config.headers["Authorization"] = `Bearer ${token}`;
        } else {
          config.headers["Content-Type"] = "application/json";
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      };
    Repository.responseInterceptor =
      responseInterceptor ??
      function (response: AxiosResponse): AxiosResponse {
        return response;
      };
    const { notifyToast } = appMessageService.useCRUDMessage();
    Repository.errorInterceptor =
      errorInterceptor ??
      async function (error: AxiosError): Promise<void> {
        if (error?.response?.status) {
          const refreshToken = Cookies.get(REFRESH_TOKEN);
          const { status, data } = error.response;
          switch (status) {
            case 401:
              try {
                if (!refreshToken) {
                  handleErrorRefreshToken(error, notifyToast);
                  return Promise.reject(error);
                }
                if (HttpInterceptor._retry) {
                  await queueRequestForToken(error);
                  return;
                }
                HttpInterceptor._retry = true;

                // const newToken = await refreshTokenRequest() //code to refresh token

                // error.config.headers[
                //     "Authorization"
                //   ] = `Bearer ${newAccessToken}`;
                //   return axios.request(error.config);
              } catch (refreshError) {
                return Promise.reject(refreshError);
              }
            case 403:
              HttpInterceptor.history.replace(FORBIDDEN_ROUTE);
              break;
            case 420:
              notifyToast({
                message: "Cập nhật thất bại",
                type: "error",
              });
              break;
            case 500:
              notifyToast({
                message: "Lỗi hệ thống",
                type: "error",
              });
              break;
            case 502:
              notifyToast({
                message: "Server BE không hoạt động",
                type: "error",
              });
              break;
            case 504:
              notifyToast({
                message: "Phản hồi quá chậm",
                type: "error",
              });
              break;
            default:
              break;
          }
        }
        return Promise.reject(error);
      };
  }
}
export const httpInterceptor = new HttpInterceptor();
