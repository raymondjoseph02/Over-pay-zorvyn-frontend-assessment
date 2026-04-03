import type { ProfileDropdownOption } from "../types/interface";

export const profileOptions: ProfileDropdownOption[] = [
  {
    name: "Your details",
    action: "PROFILE",
    icon: "user",
  },
  {
    name: "Account settings",
    action: "SETTINGS",
    icon: "settings",
  },
  {
    name: "Logout",
    action: "LOGOUT",
    icon: "logout",
  },
];
