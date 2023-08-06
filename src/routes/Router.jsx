import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SecondaryLayout from "../layout/SecondaryLayout";
import Login from "../pages/authentication/Login";
import ResetPassword from "../pages/authentication/ResetPassword";
import Customer from "../pages/customer/Customer";
import Expenses from "../pages/expenses/Expenses";
import CustomerForm from "../pages/forms/CustomerForm";
import EditProfile from "../pages/forms/EditProfile";
import ExpensesForm from "../pages/forms/ExpensesForm";
import InventoryForm from "../pages/forms/InventoryForm";
import MoneyOwedForm from "../pages/forms/MoneyOwedForm";
import SellForm from "../pages/forms/SellForm";
import StoreForm from "../pages/forms/StoreForm";
import Home from "../pages/home/Home";
import Inventory from "../pages/inventory/Inventory";
import Money from "../pages/money/Money";
import Profile from "../pages/profile/Profile";
import Sell from "../pages/sell/Sell";
import Store from "../pages/store/Store";
import StoreDetails from "../pages/store/StoreDetails";
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
        path: "/moneyOwed",
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
      {
        path: "/inventory-add",
        element: <InventoryForm></InventoryForm>,
      },
      {
        path: "/inventory-edit",
        element: <InventoryForm></InventoryForm>,
      },
      {
        path: "/sell-add",
        element: <SellForm></SellForm>,
      },
      {
        path: "/sell-edit",
        element: <SellForm></SellForm>,
      },
      {
        path: "/customer-add",
        element: <CustomerForm></CustomerForm>,
      },
      {
        path: "/customer-edit",
        element: <CustomerForm></CustomerForm>,
      },
      {
        path: "/expenses-add",
        element: <ExpensesForm></ExpensesForm>,
      },
      {
        path: "/expenses-edit",
        element: <ExpensesForm></ExpensesForm>,
      },
      {
        path: "/moneyOwed-add",
        element: <MoneyOwedForm></MoneyOwedForm>,
      },
      {
        path: "/moneyOwed-edit",
        element: <MoneyOwedForm></MoneyOwedForm>,
      },
      {
        path: "/store-add",
        element: <StoreForm></StoreForm>,
      },
      {
        path: "/store-details",
        element: <StoreDetails></StoreDetails>,
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
