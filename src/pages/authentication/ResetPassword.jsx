import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <section className="h-screen w-full bg-reset bg-cover bg-center object-cover flex items-center justify-center">
      <div className="w-full max-w-[760px] bg-whiteHigh px-6 py-14 relative">
        <div className="absolute top-6 left-6">
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11.9993 25.3332L13.8793 23.4532L7.77268 17.3332H29.3327V14.6665H7.77268L13.8927 8.5465L11.9993 6.6665L2.66602 15.9998L11.9993 25.3332Z"
                fill="#424242"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full max-w-[400px] mx-auto">
          <div className="text-center">
            <p>logo</p>
            <h2 className="text-2xl text-blackSemi font-bold mt-2">
              Reset Password
            </h2>
            <p className="text-fadeColor mt-10">
              Enter your username, or the email address you used to register. We
              will send you an email containing your username and a link to
              reset your password.
            </p>
          </div>

          <form action="" className="w-full mt-10">
            {/* email  */}

            <div className="w-full inline-flex  flex-col justify-start items-start gap-4 ">
              <span className="text-xs text-fadeColor font-medium leading-none">
                YOUR EMAIL
              </span>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter email"
                className="w-full py-3 px-4 border border-fadeLight outline-none rounded-lg"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
