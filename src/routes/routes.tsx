import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { PATH } from "./index";
import { AuthLayout } from "../layouts/authLayout";
import { DashboardLayout } from "../layouts/dashboardLayout";
import {
  DashboardPage,
  SignUp,
  SignIn,
  TransactionsPage,
  MessagesPage,
  InvoicesPage,
  RecipientsPage,
  MyWalletPage,
} from "../pages";

const routes = createBrowserRouter([
  // Pathless auth layout — wraps auth pages without contributing to the URL
  {
    element: <AuthLayout />,
    children: [
      { path: PATH.SIGN_UP, element: <SignUp /> },
      { path: PATH.SIGN_IN, element: <SignIn /> },
    ],
  },
  // Dashboard layout
  {
    element: <DashboardLayout />,
    path: PATH.ROOT,
    children: [
      // Redirect "/" → "/dashboard"
      { index: true, element: <Navigate to={PATH.DASHBOARD} replace /> },
      { path: PATH.DASHBOARD, element: <DashboardPage /> },
      { path: PATH.INVOICES, element: <InvoicesPage /> },
      { path: PATH.MESSAGES, element: <MessagesPage /> },
      { path: PATH.MY_WALLET, element: <MyWalletPage /> },
      {
        element: <Outlet />,
        path: "/activities",
        children: [
          { path: PATH.TRANSACTIONS, element: <TransactionsPage /> },
          { path: PATH.RECIPIENTS, element: <RecipientsPage /> },
        ],
      },
    ],
  },
]);

export default routes;
