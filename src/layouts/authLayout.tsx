import { Outlet } from "react-router-dom";
import LogoImage from "../assets/img/logo.png";
import { LogoTextIcon } from "../assets/svg/icons";

export const AuthLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6">
      {/* Logo */}
      <div className="flex gap-1 items-end mb-10">
        <img src={LogoImage} alt="Overpay logo" className="h-7 w-auto" />
        <span className="text-gray-600 dark:text-white">
          <LogoTextIcon />
        </span>
      </div>

      {/* Page content */}
      <Outlet />
    </div>
  );
};
