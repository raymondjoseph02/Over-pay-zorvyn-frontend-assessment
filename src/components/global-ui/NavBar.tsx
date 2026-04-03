import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../store/sidebarStore";
import { ROUTES } from "../../routes";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  NotificationBellIcon,
  SearchIcon,
} from "../../assets/svg/icons";
import { useEffect, useRef, useState } from "react";
import { ProfileModal } from "./ProfileModal";
import { profileOptions } from "../../data/profileOptions";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HamburgerButton from "./Hamburger";
import useClickOutside from "../../hooks/useClickOutside";
import { useAuthStore } from "../../store/authStore";

export const NavBar = () => {
  const { toggle, isOpen, close } = useSidebar();
  const location = useLocation();
  const theme = useTheme((s) => s.theme);
  const toggleTheme = useTheme((s) => s.toggleTheme);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(profileRef, () => setProfileOpen(false), profileOpen);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const { currentUser } = useAuthStore();

  const title =
    Object.values(ROUTES)
      .flat()
      .flatMap((route) => [route, ...(route.subRoutes ?? [])])
      .find((route) => route.path === location.pathname)?.name ?? "Dashboard";

  const isNotifications = true;

  const toggleProfileModal = () => {
    setProfileOpen((p) => !p);
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      close();
    }
  }, [location.pathname]);

  const shortName = currentUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="pb-6 pt-9 px-5 md:px-10 dark:bg-gray-900 bg-white ">
      <nav className="flex justify-between w-full">
        <div>
          <h1 className="md:text-2xl font-bold tracking-[0px] leading-[130%] capitalize dark:text-gray-50 hidden lg:flex ">
            {title}
          </h1>
          <HamburgerButton isOpen={isOpen} toggle={toggle} />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-full text-gray-900 dark:text-white cursor-pointer">
            <SearchIcon />
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-full text-gray-900 dark:text-white cursor-pointer">
            <div className="relative">
              {isNotifications && (
                <div className="w-2 h-2 rounded-full bg-error-base border-2  absolute top-1 right-1 border-gray-50 dark:border-gray-800" />
              )}
              <NotificationBellIcon />
            </div>
          </div>

          {/* user profile */}
          <div ref={profileRef} className="relative">
            <button
              role="button"
              onClick={toggleProfileModal}
              className={`flex gap-4 sm:gap-4.5 items-center cursor-pointer p-2 rounded-full shadow-gray-600 transition ease-in-out ${profileOpen ? "bg-gray-200 dark:bg-gray-200" : "dark:bg-gray-800 bg-gray-50"}`}
            >
              <div className="flex gap-3 items-center">
                <div className="size-8 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center shrink-0">
                  {currentUser.profilePictureUrl ? (
                    <img
                      src={currentUser.profilePictureUrl}
                      alt={currentUser.name}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-black text-primary-500">
                      {shortName}
                    </span>
                  )}
                </div>
                <p
                  className={`text-base hidden md:flex font-black ${profileOpen ? "text-gray-900" : "dark:text-gray-50 text-gray-900"}`}
                >
                  {currentUser.name.split(" ")[0]}{" "}
                  {currentUser.name.split(" ")[1]?.[0]}.
                </p>
              </div>
              <div className="text-gray-600 hidden md:flex">
                {profileOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </button>
            <ProfileModal
              isOpen={profileOpen}
              options={profileOptions}
              onClose={() => setProfileOpen(false)}
              user={currentUser}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
