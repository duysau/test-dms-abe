import { AxiosError } from "axios";
import { ROOT_ROUTE } from "config/route-const";
import { getParameterByName } from "core/helpers/query";
import { authenticationService } from "core/services/authentication-service";
import { HttpStatusCode } from "core/services/service-types";
import { isEqual } from "lodash";
import { AppUser } from "models/AppUser";
import { LoginUser } from "models/Login/Login";
import { useCallback, useEffect, useState } from "react";
import { profileActions } from "rtk/slices";
import { useAppDispatch } from "rtk/useRedux";
import { default as Cookie } from "js-cookie";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const [errorMessagePass, setErrorMessagePass] = useState<string>("");
  const [errorMessageUsername, setErrorMessageUsername] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLoadingButtonSubmit, setIsLoadingButtonSubmit] =
    useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<LoginUser>({
    ...new LoginUser(),
    username: "",
    password: "",
  });
  const handleLoginFailed = useCallback((error: AxiosError) => {
    if (isEqual(error?.response?.status, HttpStatusCode.BAD_REQUEST)) {
      const { message } = error?.response?.data || {};
      const { username, password } = error?.response?.data?.errors || {};

      if (username) setErrorMessageUsername(username);
      if (password) setErrorMessagePass(password);
      if (message) setErrorMessagePass(message);
    }
  }, []);
  const handleSetValue = useCallback(
    (field: string, value?: string | number | boolean | null) => {
      setLoginUser((prevLoginUser) => ({
        ...prevLoginUser,
        [field]: value,
        errors: undefined,
      }));
      setErrorMessagePass("");
      setErrorMessageUsername("");
    },
    []
  );

  const handleChangeField = useCallback(
    (field: string) => {
      return (value: string) => {
        return handleSetValue(field, value);
      };
    },
    [handleSetValue]
  );

  const setUser = useCallback(
    (user: AppUser) => {
      dispatch(
        profileActions.updateAccount({
          id: user.id,
          username: user.username,
          displayName: user.displayName,
          address: user.address,
          email: user.email,
          phone: user.phone,
          sexId: user.sexId,
          birthday: user.birthday,
          avatar: user.avatar,
          department: user.department,
          organizationId: user.organizationId,
          longitude: user.longitude,
          latitude: user.latitude,
          statusId: user.statusId,
          rowId: user.rowId,
          organization: user.organization,
          sex: user.sex,
          status: user.status,
          store: user.store,
        })
      );
      Cookie.set("Token", user.token);
      const redirect = getParameterByName("redirect") ?? ROOT_ROUTE;
      window.location.href = `${redirect}`;
    },
    [dispatch]
  );

  const handleLogin = useCallback(
    (
      event:
        | React.KeyboardEvent<HTMLInputElement>
        | React.MouseEvent<HTMLInputElement>
    ) => {
      event.preventDefault();
      setIsLoadingButtonSubmit(true);
      authenticationService.login(loginUser).subscribe({
        next: (response) => {
          setUser(response);
          setLoading(false);
          setIsLoadingButtonSubmit(false);
        },
        error: (error: AxiosError) => {
          handleLoginFailed(error);
          setIsLoadingButtonSubmit(false);
          setLoading(true);
        },
      });
    },
    [loginUser, setUser, handleLoginFailed]
  );

  const handleEnter = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === "Enter") {
        handleLogin(ev);
      }
    },
    [handleLogin]
  );

  const getUserInformation = useCallback(() => {
    authenticationService.checkAuth().subscribe({
      next: (user) => {
        setUser(user);
      },
      error: (error: AxiosError) => {
        handleLoginFailed(error);
      },
      complete: () => {
        setLoading(false);
      },
    });
  }, [handleLoginFailed, setUser]);

  useEffect(() => {
    const token = Cookie.get("Token");
    if (token) {
      getUserInformation();
    } else {
      setLoading(false);
    }
  }, [getUserInformation]);

  return {
    errorMessagePass,
    errorMessageUsername,
    isLoadingButtonSubmit,
    loginUser,
    isLoading,
    handleLogin,
    handleChangeField,
    handleEnter,
  };
}
