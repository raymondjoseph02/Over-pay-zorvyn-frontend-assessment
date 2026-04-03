import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LogoTextIcon,
  QuestionCircleIcon,
  SettingsIcon,
} from "../../assets/svg/icons";
import LogoImage from "../../assets/img/logo.png";
import { ROUTES } from "../../routes";
import { NavItem } from "./NavItems";
import { useAuthStore } from "../../store/authStore";

export const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser } = useAuthStore();

  //  controls which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const visibleRoutes = ROUTES["dashboard"].filter(
    (route) => !route.adminOnly || currentUser.role === "admin",
  );

  return (
    <aside className=" dark:bg-gray-800 pb-10 pt-11 w-62.5 max-w-3xs bg-gray-50 px-6 flex flex-col justify-between h-full">
      <div>
        <div aria-label="over pay logo" className="flex gap-1 items-end">
          <img src={LogoImage} alt="over pay logo" className="h-6 w-auto" />
          <span className="text-gray-600 dark:text-white">
            <LogoTextIcon />
          </span>
        </div>

        <hr className="mb-10 mt-8 bg-gray-300 dark:bg-gray-700 h-px" />

        <nav className="flex flex-col gap-1">
          {visibleRoutes.map((route) => (
            <NavItem
              key={route.path}
              route={route}
              isOpen={openDropdown === route.path}
              setOpen={setOpenDropdown}
              pathname={pathname}
              navigate={navigate}
            />
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-1">
        <button
          onClick={() => {
            setOpenDropdown(null);
            navigate("#");
          }}
          className="w-full flex items-center gap-2 p-3 text-gray-600 text-sm font-medium cursor-pointer hover:bg-primary-100 hover:text-gray-700 dark:hover:text-primary-400 dark:hover:bg-gray-700  transition ease-in-out duration-300"
        >
          <QuestionCircleIcon />
          Get Help
        </button>

        <button
          onClick={() => {
            setOpenDropdown(null);
            navigate("#");
          }}
          className="w-full flex items-center gap-2 p-3 text-gray-600 text-sm font-medium cursor-pointer hover:bg-primary-100 hover:text-gray-700 dark:hover:text-primary-400 dark:hover:bg-gray-700  transition ease-in-out duration-300"
        >
          <SettingsIcon />
          Settings
        </button>
      </div>
    </aside>
  );
};
