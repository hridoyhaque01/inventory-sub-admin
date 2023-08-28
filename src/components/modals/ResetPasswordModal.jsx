import React, { useState } from "react";
import PasswordInput from "../shared/ui/PasswordInput";

const ResetPasswordModal = ({ email, errorNotify, infoNotify, handler }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowConfirmIcon, setIsShowConfirmIcon] = useState(false);

  const handleInput = (event) => {
    setIsShowIcon(event.target.value.trim().length > 0);
    const password = event.target.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasLength = password.length >= 8;
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasLength &&
      hasSpecialSymbol
    ) {
      setIsStrong(true);
    } else {
      setIsStrong(false);
    }
  };

  const handleInputTwo = (event) => {
    setIsShowConfirmIcon(event.target.value.trim().length > 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    if (newPassword !== confirmPassword) {
      errorNotify("Password does not match");
      return;
    } else {
      const formData = new FormData();
      const data = { newPassword, email };
      formData.append("data", JSON.stringify(data));
      handler(formData)
        .unwrap()
        .then((res) => {
          infoNotify("Store password update successfull");
          form.reset();
        })
        .catch((error) => {
          console.log(error);
          errorNotify("Store password update failed");
        });
    }
  };
  return (
    <section>
      <input type="checkbox" id="resetPasswordModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex flex-col items-center justify-center gap-4 bg-white">
          <div className="w-full max-w-[618px]">
            <div className="flex justify-center mb-6">
              <span className="inline-block p-3 rounded-full font-medium bg-warningLowColor">
                Reset Password
              </span>
            </div>
            <form action="" className="w-full" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col justify-start gap-6">
                {/* NEW PASSWORD  */}

                <div className="">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                      New Password :
                    </span>
                    <PasswordInput
                      isShowPassword={isShowPassword}
                      setIsShowPassword={setIsShowPassword}
                      handleInput={handleInput}
                      isShowIcon={isShowIcon}
                      name="newPassword"
                      required
                      placeholder="Enter new password"
                    ></PasswordInput>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right"></span>
                    {!isStrong && (
                      <p className="text-[10px] text-fadeColor mt-1">
                        Must contain more than 7 character with uppercase,
                        lowercase, symble and number
                      </p>
                    )}
                  </div>
                </div>
                {/* confirm PASSWORD  */}

                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Confirm Password :
                  </span>
                  <div className="w-full">
                    <PasswordInput
                      isShowPassword={isShowConfirmPassword}
                      setIsShowPassword={setIsShowConfirmPassword}
                      handleInput={handleInputTwo}
                      isShowIcon={isShowConfirmIcon}
                      name="confirmPassword"
                      required
                      placeholder="Enter confirm password"
                    ></PasswordInput>
                  </div>
                </div>

                {/* submit button  */}

                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right"></span>
                  <div className="modal-action flex items-center justify-center">
                    <label
                      htmlFor="resetPasswordModal"
                      className="btn rounded-full w-[160px] bg-transparent text-errorLowColor border-errorLowColor hover:border-errorLowColor hover:bg-transparent cursor-pointer"
                    >
                      Cancel
                    </label>
                    <button type="submit" disabled={!isStrong}>
                      <label
                        htmlFor="resetPasswordModal"
                        className="btn rounded-full w-[160px] bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh cursor-pointer"
                        disabled={!isStrong}
                      >
                        Save
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordModal;
