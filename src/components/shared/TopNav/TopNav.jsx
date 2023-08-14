import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { avatar } from "../../../assets/getAssets";
import { logout } from "../../../features/auth/authSlice";
import { toggleSidebar } from "../../../features/nav/navSlice";

const TopNav = ({ isShowButton }) => {
  const { store } = useSelector((state) => state.auth);
  const { fileUrl } = store || {};
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-primaryMainDarkest px-6 py-2 z-[9999] relative">
      {/* top nav left */}
      <div className="flex-1 flex items-center gap-3 text-whiteHigh">
        <button
          type="button"
          className={`${isShowButton ? "" : "hidden"} lg:hidden`}
          onClick={() => dispatch(toggleSidebar())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="menu-bar"
            className="h-8 w-8 fill-whiteHigh"
          >
            <rect width="24" height="24" fill="none"></rect>
            <path
              d="M18.2,12.7H5.8C5.3,12.7,5,12.4,5,12s0.3-0.7,0.7-0.7h12.5c0.4,0,0.7,0.3,0.7,0.7S18.7,12.7,18.2,12.7z M19,7.8
		C19,7.3,18.7,7,18.3,7H5.8C5.3,7,5,7.4,5,7.8s0.3,0.7,0.7,0.7h12.5C18.7,8.5,19,8.2,19,7.8z M19,16.2c0-0.4-0.3-0.7-0.7-0.7H5.8
		c-0.4,0-0.7,0.3-0.7,0.7C5,16.6,5.4,17,5.8,17h12.5C18.7,17,19,16.7,19,16.2z"
            ></path>
          </svg>
        </button>
        <h1 className="text-2xl">
          <Link to="/">logo</Link>
        </h1>
      </div>
      {/* top nav right */}
      <div className="flex-none">
        {/* user avater */}
        <div className="dropdown dropdown-end ">
          <label
            tabIndex={3}
            className="btn btn-ghost btn-circle outline-none border-none avatar"
          >
            <div className="w-10 h-10 rounded-full">
              <img
                src={fileUrl || avatar}
                alt=""
                className="w-full object-cover bg-cover"
              />
            </div>
          </label>
          <ul
            tabIndex={3}
            className="menu menu-compact dropdown-content  items-center mt-3 shadow bg-whiteHigh rounded-box w-28  z-50 divide-y divide-whiteLow "
          >
            <li className="">
              <Link to="/store-profile" className=" active:bg-primaryMain">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="active:bg-primaryMain text-errorLightColor hover:text-errorLightColor"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
