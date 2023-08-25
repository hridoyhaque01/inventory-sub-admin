import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { avatar } from "../../assets/getAssets";

function Profile() {
  const { store } = useSelector((state) => state.auth);
  return (
    <section className="h-full w-full overflow-auto px-4 md:px-6 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-xl lg:text-2xl font-bold">
            Edit Profile
          </h4>
        </div>
        <div className="bg-whiteHigh w-full px-4">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Store Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm bg-whiteMid"
                    defaultValue={store?.name}
                  />
                </div>
                {/* profile pic */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Store Image:
                  </span>
                  <div>
                    <img
                      src={store?.fileUrl || avatar}
                      alt=""
                      className="w-28 h-28 lg:w-40 lg:h-40 rounded-full object-cover bg-cover"
                    />
                  </div>
                </div>
                {/* Email: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Email:
                  </span>
                  <input
                    type="text"
                    placeholder="Email address"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm bg-whiteMid"
                    defaultValue={store?.email}
                  />
                </div>
                {/* phone no */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Address :
                  </span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm bg-whiteMid"
                    defaultValue={store?.location}
                  />
                </div>
                {/* edit button */}
                <div className="flex items-center justify-end gap-6">
                  <Link
                    to="/"
                    className="w-full max-w-[120px] lg:max-w-[160px] text-sm p-4 rounded-full font-medium border border-errorLightColor text-errorLightColor text-center"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="/edit-store-profile"
                    className="w-full max-w-[120px] lg:max-w-[160px] text-sm p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh text-center"
                  >
                    Edit Store
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
