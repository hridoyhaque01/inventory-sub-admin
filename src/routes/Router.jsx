import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SecondaryLayout from "../layout/SecondaryLayout";
import Login from "../pages/authentication/Login";
import ResetPassword from "../pages/authentication/ResetPassword";
import Customer from "../pages/customer/Customer";
import Expenses from "../pages/expenses/Expenses";
import EditProfile from "../pages/forms/EditProfile";
import Home from "../pages/home/Home";
import Inventory from "../pages/inventory/Inventory";
import Money from "../pages/money/Money";
import Profile from "../pages/profile/Profile";
import Sell from "../pages/sell/Sell";
import Store from "../pages/store/Store";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/customer",
        element: <Customer></Customer>,
      },
      {
        path: "/expenses",
        element: <Expenses></Expenses>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/money",
        element: <Money></Money>,
      },
      {
        path: "/sell",
        element: <Sell></Sell>,
      },
      {
        path: "/store",
        element: <Store></Store>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <SecondaryLayout></SecondaryLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/edit-profile",
        element: <EditProfile></EditProfile>,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
