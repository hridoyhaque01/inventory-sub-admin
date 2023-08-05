import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function EditProfile() {
  const profileRef = useRef();
  const [profile, setProfile] = useState(null);
  const [profilePreveiw, setProfilePreveiw] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    profileRef.current.files = event.dataTransfer.files;
    const imageURL = URL.createObjectURL(file);
    setProfile(file);
    setProfilePreveiw(imageURL);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfile(file);
    setProfilePreveiw(imageURL);
  };

  const handleProfileDelete = () => {
    profileRef.current.value = "";
    setProfile(null);
    setProfilePreveiw(null);
  };

  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-2xl font-bold">Edit Profile</h4>
        </div>
        <div className="bg-whiteHigh w-full">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* name */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Name:
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor"
                  />
                </div>
                {/* profile */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Avatar (140X140):
                  </span>
                  <div className="w-full">
                    {!profilePreveiw ? (
                      <div
                        className="h-[140px] w-full flex flex-col items-center justify-center border border-dashed border-primaryMainDarkest rounded-lg bg-whiteLight px-4 py-6"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="41"
                              height="40"
                              viewBox="0 0 41 40"
                              fill="none"
                            >
                              <path
                                d="M12.6622 34.9683C10.3856 34.7935 8.22243 33.9038 6.48159 32.4264C4.74075 30.9489 3.51123 28.9592 2.96859 26.7413C2.42595 24.5235 2.59794 22.1909 3.46 20.0766C4.32207 17.9623 5.83012 16.1744 7.76883 14.9683C8.18135 11.7517 9.75183 8.79577 12.1864 6.65353C14.6209 4.51128 17.7526 3.32959 20.9955 3.32959C24.2384 3.32959 27.3701 4.51128 29.8046 6.65353C32.2392 8.79577 33.8096 11.7517 34.2222 14.9683C36.1609 16.1744 37.6689 17.9623 38.531 20.0766C39.393 22.1909 39.565 24.5235 39.0224 26.7413C38.4798 28.9592 37.2502 30.9489 35.5094 32.4264C33.7686 33.9038 31.6054 34.7935 29.3288 34.9683V34.9999H12.6622V34.9683ZM22.6622 21.6666H27.6622L20.9955 13.3333L14.3288 21.6666H19.3288V28.3333H22.6622V21.6666Z"
                                fill="#234B4C"
                              />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-center text-fadeColor">
                            <label
                              htmlFor="profile"
                              className="text-primaryMainDarkest cursor-pointer"
                            >
                              Upload Image
                            </label>{" "}
                            or Drag and Drop <br />
                            PNG, JPG
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="h-[140px] flex flex-col items-center justify-center rounded-lg bg-whiteLight relative overflow-hidden"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <label htmlFor="profile" className="w-full h-full">
                          <img
                            src={profilePreveiw}
                            alt=""
                            className="w-full h-full object-cover bg-cover"
                          />
                        </label>
                        <button
                          type="button"
                          className="absolute top-4 right-4 h-7 w-7 bg-errorColor rounded-full flex items-center justify-center"
                          onClick={handleProfileDelete}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            id="close"
                          >
                            <path
                              fill="#fff"
                              d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      id="profile"
                      onChange={handleFileSelect}
                      className="opacity-0 absolute"
                      required
                      ref={profileRef}
                    />
                  </div>
                </div>
                {/* email */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Email:
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor"
                  />
                </div>

                {/* phone */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Phone No :
                  </span>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Mobile with country code"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor appearance-none"
                  />
                </div>

                {/* Old Password : */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Phone No :
                  </span>
                  <input
                    type="text"
                    name="oldPassword"
                    placeholder="Old password"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor"
                  />
                </div>

                {/* New Password : */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    New Password :
                  </span>
                  <input
                    type="text"
                    name="newPassword"
                    placeholder="New password"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor appearance-none"
                  />
                </div>

                {/* phone */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Confirm Password :
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Confirm password"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm placeholder:text-fadeColor appearance-none"
                  />
                </div>

                {/* edit button */}
                <div className="flex items-center justify-end gap-3">
                  <Link
                    to="/profile"
                    className="w-full max-w-[160px] p-4 rounded-full font-medium border border-errorLightColor text-errorLightColor text-center"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="w-full max-w-[160px] p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh text-center"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
