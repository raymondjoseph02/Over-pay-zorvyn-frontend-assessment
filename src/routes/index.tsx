import {
  ActivitiesIcon,
  HomeIcon,
  InvoiceIcon,
  MessageIcon,
  WalletIcon,
} from "../assets/svg/icons";
import type { Route } from "../types/interface";

export const PATH: Record<string, string> = {
  ROOT: "/",
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  INVOICES: "/invoices",
  MESSAGES: "/messages",
  MY_WALLET: "/my-wallet",
  ACTIVITIES: "/activities",
  TRANSACTIONS: "/activities/transactions",
  RECIPIENTS: "/activities/recipients",
};

export const ROUTES: Record<string, Route[]> = {
  // auth routes
  auth: [
    {
      name: "Sign Up",
      path: PATH.SIGN_UP,
      hasSubRoutes: false,
    },
    {
      name: "Sign In",
      path: PATH.SIGN_IN,
      hasSubRoutes: false,
    },
    {
      name: "Forgot Password",
      path: PATH.FORGOT_PASSWORD,
      hasSubRoutes: false,
    },
  ],

  //   dashboard routes
  dashboard: [
    {
      name: "Dashboard",
      path: PATH.DASHBOARD,
      hasSubRoutes: false,
      icon: <HomeIcon />,
    },
    {
      name: "invoices",
      path: PATH.INVOICES,
      hasSubRoutes: false,
      icon: <InvoiceIcon />,
    },
    {
      name: "message",
      path: PATH.MESSAGES,
      hasSubRoutes: false,
      icon: <MessageIcon />,
      barge: true,
      bargeValue: 5,
      adminOnly: true,
    },
    {
      name: "my wallet",
      path: PATH.MY_WALLET,
      hasSubRoutes: false,
      icon: <WalletIcon />,
    },
    {
      name: "activities",
      path: PATH.ACTIVITIES,
      hasSubRoutes: true,
      icon: <ActivitiesIcon />,
      subRoutes: [
        {
          name: "transactions",
          path: PATH.TRANSACTIONS,
          hasSubRoutes: false,
        },
        {
          name: "recipients",
          path: PATH.RECIPIENTS,
          hasSubRoutes: false,
        },
      ],
    },
  ],
};
