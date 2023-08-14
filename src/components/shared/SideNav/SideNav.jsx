import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";
import { toggleSidebar } from "../../../features/nav/navSlice";
import "./SideNav.css";

const SideNav = () => {
  const dispatch = useDispatch();
  const { isShowSidebar } = useSelector((state) => state.nav);
  return (
    <>
      <div
        className={`bg-primaryMainDarkest min-h-screen pt-[66px] lg:pt-0 overflow-auto shrink-0 fixed top-0 bottom-0 left-0 lg:relative ${
          isShowSidebar ? "w-52" : "w-0 lg:w-52"
        }  text-whiteHigh sidebar duration-300 shrink-0 z-[80]`}
      >
        {/* routes */}
        <section className="flex flex-col flex-1 justify-start items-start gap-4 py-4">
          {/* dashboard  */}
          <div className="w-full overflow-hidden capitalize">
            <NavLink
              to="/"
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>dashboard</span>
              </span>
            </NavLink>
          </div>

          {/* Inventory  */}
          <div className="w-full overflow-hidden capitalize">
            <NavLink
              to="/inventory"
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.25 6H6.25V9H16.25V6H18.25V11H20.25V6C20.25 4.9 19.35 4 18.25 4H14.07C13.65 2.84 12.55 2 11.25 2C9.95 2 8.85 2.84 8.43 4H4.25C3.15 4 2.25 4.9 2.25 6V20C2.25 21.1 3.15 22 4.25 22H10.25V20H4.25V6ZM11.25 4C11.8 4 12.25 4.45 12.25 5C12.25 5.55 11.8 6 11.25 6C10.7 6 10.25 5.55 10.25 5C10.25 4.45 10.7 4 11.25 4Z"
                    fill="white"
                  />
                  <path
                    d="M20.25 12.5L14.76 18L11.75 15L10.25 16.5L14.76 21L21.75 14L20.25 12.5Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>Inventory</span>
              </span>
            </NavLink>
          </div>

          {/* Sell  */}
          <div className="w-full overflow-hidden capitalize">
            <NavLink
              to="/sales"
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.408 11.4124L12.578 2.58244C12.208 2.21244 11.698 2.00244 11.168 2.00244H3.99805C2.89805 2.00244 1.99805 2.90244 1.99805 4.00244V11.1724C1.99805 11.7024 2.20805 12.2124 2.58805 12.5824L11.418 21.4124C12.198 22.1924 13.468 22.1924 14.248 21.4124L21.418 14.2424C22.198 13.4624 22.198 12.2024 21.408 11.4124ZM12.828 20.0024L3.99805 11.1724V4.00244H11.168L19.998 12.8324L12.828 20.0024Z"
                    fill="white"
                  />
                  <path
                    d="M6.49805 8.00244C7.32647 8.00244 7.99805 7.33087 7.99805 6.50244C7.99805 5.67401 7.32647 5.00244 6.49805 5.00244C5.66962 5.00244 4.99805 5.67401 4.99805 6.50244C4.99805 7.33087 5.66962 8.00244 6.49805 8.00244Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>Sales</span>
              </span>
            </NavLink>
          </div>

          {/* customer  */}
          <div className="w-full overflow-hidden capitalize">
            <NavLink
              to="/customer"
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" fill="white" />
                  <path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" fill="white" />
                  <path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" fill="white" />
                  <path
                    d="M18 13H16V16H13V18H16V21H18V18H21V16H18V13Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>Customer</span>
              </span>
            </NavLink>
          </div>

          {/* Money Owed  */}
          <div className="w-full overflow-hidden capitalize">
            <NavLink
              to="/moneyOwed"
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.89 11.1C11.11 10.51 10.25 10.14 10.25 9.2C10.25 8.18 11.36 7.81 12.06 7.81C13.37 7.81 13.85 8.8 13.96 9.15L15.54 8.48C15.39 8.04 14.72 6.57 12.88 6.25V5H11.13V6.26C8.53 6.82 8.51 9.11 8.51 9.22C8.51 11.49 10.76 12.13 11.86 12.53C13.44 13.09 14.14 13.6 14.14 14.56C14.14 15.69 13.09 16.17 12.16 16.17C10.34 16.17 9.82 14.3 9.76 14.08L8.1 14.75C8.73 16.94 10.38 17.53 11.12 17.71V19H12.87V17.76C13.39 17.67 15.89 17.17 15.89 14.54C15.9 13.15 15.29 11.93 12.89 11.1Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>Money Owed</span>
              </span>
            </NavLink>
          </div>

          {/* logout */}
          <div className="w-full overflow-hidden capitalize">
            <button
              className="flex items-center px-4 py-2 gap-2 cursor-pointer select-none"
              onClick={() => dispatch(logout())}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.5417 11.832L15.375 8.9987M15.375 8.9987L12.5417 6.16536M15.375 8.9987L5.45833 8.9987M9.70833 11.832V12.5404C9.70833 13.714 8.75694 14.6654 7.58333 14.6654H4.75C3.5764 14.6654 2.625 13.714 2.625 12.5404V5.45703C2.625 4.28343 3.5764 3.33203 4.75 3.33203H7.58333C8.75694 3.33203 9.70833 4.28343 9.70833 5.45703V6.16536"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={`flex-1 shrink-0`}>
                <span>Logout</span>
              </span>
            </button>
          </div>
        </section>
      </div>
      <div
        className={`${
          isShowSidebar ? "block" : "hidden lg:hidden"
        } lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-overlay z-10`}
        onClick={() => dispatch(toggleSidebar())}
      ></div>
    </>
  );
};

export default SideNav;
