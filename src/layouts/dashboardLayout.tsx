import { Outlet } from "react-router-dom";
import { NavBar } from "../components/global-ui/NavBar";
import { SideBar } from "../components/global-ui/SideBar";
import { useSidebar } from "../store/sidebarStore";
import { AnimatePresence, motion } from "framer-motion";

export const DashboardLayout = () => {
  const { isOpen, close } = useSidebar();

  return (
    <div className="flex h-dvh overflow-hidden dark:bg-gray-900 bg-white">
      {/* desktop sidebar - always visible at lg+ */}
      <div className="hidden lg:block h-dvh shrink-0">
        <SideBar />
      </div>

      {/* mobile sidebar - animated, below lg */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={close}
            />
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-dvh z-50 lg:hidden"
            >
              <SideBar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 dark:bg-gray-900 bg-white md:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
