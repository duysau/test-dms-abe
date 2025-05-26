import { Password, User } from "@carbon/icons-react";
import { Image, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import DmsAbeLogo from "assets/icons/dms-abe-logo.svg";
import { useTranslation } from "react-i18next";
import "./loginPage.scss";

export default function Login() {
  const [translate] = useTranslation();
  return (
    <div className="min-h-screen overflow-y-hidden relative bg-[#b73853]">
      {/* Login Box */}
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          {/* Title Section */}
          <div className="flex flex-col items-center text-white lg:items-start">
            <div className="flex items-center justify-center mb-4 lg:mb-8">
              <div className="flex items-center justify-center rounded-full">
                <Image src={DmsAbeLogo} width={50} height={50} />
              </div>
              <div className="text-xl lg:text-2xl font-bold mt-1 ml-2 text-center lg:text-left">
                Website cho Đại lý
              </div>
            </div>
          </div>

          {/* Login Frame */}
          <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <div className="login-content">
              {/* Title */}
              <div className="text-base sm:text-lg font-bold mb-8 sm:mb-10 text-center">
                {translate("login.title")}
              </div>

              {/* Username Field */}
              <div className="mb-4 sm:mb-6">
                <FormItem>
                  <Input
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    autoComplete="off"
                    className="h-10 font-bold"
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
              <div className="mb-4 sm:mb-6">
                <FormItem>
                  <Input.Password
                    placeholder="Nhập mật khẩu"
                    className="h-10 font-bold"
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
              <div className="mt-6 sm:mt-10">
                <button className="w-full py-3 sm:py-4 px-8 rounded font-semibold text-white transition-all duration-300 disabled:opacity-50 bg-[#344955]">
                  {translate("login.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
