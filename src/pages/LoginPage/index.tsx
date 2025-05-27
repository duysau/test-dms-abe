import { Password, User } from "@carbon/icons-react";
import { Button, Form, Image, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import DmsAbeLogo from "assets/icons/dms-abe-logo.svg";
import { useTranslation } from "react-i18next";
import "./loginPage.scss";
import useLogin from "./loginService";

export default function Login() {
  const [translate] = useTranslation();

  const {
    loginUser,
    errorMessagePass,
    errorMessageUsername,
    isLoadingButtonSubmit,
    handleLogin,
    handleChangeField,
    handleEnter,
  } = useLogin();

  return (
    <div className='relative min-h-screen overflow-y-hidden bg-[#b73853]'>
      {/* Login Box */}
      <div className='flex min-h-screen w-full items-center justify-center px-4'>
        <div className='flex w-full max-w-6xl flex-col items-center justify-between gap-8 md:flex-row'>
          {/* Title Section */}
          <div className='flex flex-col items-center text-white lg:items-start'>
            <div className='mb-4 flex items-center justify-center lg:mb-8'>
              <div className='flex items-center justify-center rounded-full'>
                <Image src={DmsAbeLogo} width={50} height={50} />
              </div>
              <div className='ml-2 mt-1 text-center text-xl font-bold lg:text-left lg:text-2xl'>
                Website cho Đại lý
              </div>
            </div>
          </div>

          {/* Login Frame */}
          <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl sm:p-8'>
            <div className='login-content'>
              {/* Title */}
              <div className='mb-8 text-center text-base font-bold sm:mb-10 sm:text-lg'>
                {translate("login.title")}
              </div>

              <Form>
                {/* Username Field */}
                <div className='mb-4 sm:mb-6'>
                  <FormItem
                    validateStatus={errorMessageUsername ? "error" : ""}
                    help={errorMessageUsername}
                  >
                    <Input
                      type='text'
                      placeholder={
                        translate("login.placeholder.username") ||
                        "Nhập tên đăng nhập"
                      }
                      value={loginUser.username}
                      onChange={(event) =>
                        handleChangeField("username")(event.target.value)
                      }
                      autoComplete='off'
                      className='h-10 font-bold'
                      style={{
                        padding: "12px 16px",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                      prefix={<User />}
                    />
                  </FormItem>
                </div>

                {/* Password Field */}
                <div className='mb-4 sm:mb-6'>
                  <FormItem
                    validateStatus={errorMessagePass ? "error" : ""}
                    help={errorMessagePass}
                  >
                    <Input.Password
                      placeholder={translate("login.placeholder.password")}
                      value={loginUser.password}
                      className='h-10 font-bold'
                      onPressEnter={handleEnter}
                      onChange={(event) =>
                        handleChangeField("password")(event.target.value)
                      }
                      style={{
                        padding: "12px 16px",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                      prefix={<Password />}
                    />
                  </FormItem>
                </div>

                {/* Login Button */}
                <div className='mt-6 sm:mt-10'>
                  <Button
                    size='large'
                    loading={isLoadingButtonSubmit}
                    onClick={(e) => handleLogin(e)}
                    className='w-full rounded bg-[#344955] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-600 disabled:opacity-50 sm:py-4'
                  >
                    {translate("login.button")}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
