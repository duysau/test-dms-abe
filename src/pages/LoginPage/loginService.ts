import { AxiosError } from "axios";
import { ROOT_ROUTE } from "config/route-const";
import { getParameterByName } from "core/helpers/query";
import { authenticationService } from "core/services/authentication-service";
import { HttpStatusCode } from "core/services/service-types";
import { isEqual } from "lodash";
import { AppUser } from "models/AppUser";
import { LoginUser } from "models/Login/Login";
import { useCallback, useState } from "react";
import { profileActions } from "rtk/slices";
import { useAppDispatch } from "rtk/useRedux";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const [errorMessagePass, setErrorMessagePass] = useState<string>("");
  const [errorMessageUsername, setErrorMessageUsername] = useState<string>("");
  const [isLoadingButtonSubmit, setIsLoadingButtonSubmit] =
    useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<LoginUser>({
    ...new LoginUser(),
    email: "",
    password: "",
  });
  const handleLoginFailed = (error: AxiosError) => {
    if (isEqual(error?.response?.status, HttpStatusCode.BAD_REQUEST)) {
      const { message } = error?.response?.data || {};
      const { email, password } = error?.response?.data?.errors || {};

      if (email) setErrorMessageUsername(email);
      if (password) setErrorMessagePass(password);
      if (message) setErrorMessagePass(message);
    }
  };

  const handleSetValue = (
    field: string,
    value?: string | number | boolean | null
  ) => {
    setLoginUser({
      ...loginUser,
      [field]: value,
      errors: undefined,
    });
    setErrorMessagePass("");
    setErrorMessageUsername("");
  };

  const handleChangeField = useCallback(
    (field: string) => {
      return (value: string) => {
        return handleSetValue(field, value);
      };
    },
    [handleSetValue]
  );

  const setUser = (user: AppUser) => {
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
    const redirect = getParameterByName("redirect") ?? ROOT_ROUTE;
    window.location.href = `${redirect}`;
  };

  const handleLogin = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setIsLoadingButtonSubmit(true);
    authenticationService.login(loginUser).subscribe({
      next: (response) => {
        setUser(response);
        setIsLoadingButtonSubmit(false);
      },
      error: (error: AxiosError) => {
        handleLoginFailed(error);
        setIsLoadingButtonSubmit(false);
      },
    });
  };

  const handleEnter = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === "Enter") {
        handleLogin(ev);
      }
    },
    [handleLogin]
  );
  return {
    loginUser,
    handleLogin,
    handleChangeField,
    handleEnter,
  };
}
