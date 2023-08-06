import React from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="h-screen w-full text-whiteHigh">
      <div className="flex items-center w-full h-full">
        <div className="w-full max-w-[630px] h-full flex items-center justify-center p-4">
          <div className="w-full max-w-[296px]">
            <div className="mb-10">
              <h2>logo</h2>
              <h2 className="text-blackSemi text-2xl font-bold">
                Welcome Back!
              </h2>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* email  */}
                <div className="inline-flex flex-col justify-start items-start gap-4 ">
                  <span className="text-xs text-fadeColor font-medium leading-none">
                    EMAIL
                  </span>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter email"
                    className="w-full py-3 px-4 border border-fadeLight outline-none rounded-lg"
                  />
                </div>
                {/* password  */}

                <div className="inline-flex flex-col justify-start items-start gap-4 ">
                  <span className="text-xs text-fadeColor font-medium leading-none">
                    PASSWORD
                  </span>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Enter password"
                    className="w-full py-3 px-4 border border-fadeLight outline-none rounded-lg"
                  />
                </div>
                {/* remember  */}

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="bg-whiteLow"
                    id="remember"
                  />
                  <label
                    htmlFor="remember"
                    className="text-blackLow font-medium"
                  >
                    Remeber me
                  </label>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh"
                  >
                    SIGN IN
                  </button>
                </div>
              </div>
            </form>

            <div className="text-center mt-6">
              <Link to="/reset-password" className="text-navyDark">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-login bg-cover bg-center object-cover flex items-end pb-24">
          <div className="w-full max-w-[490px] mx-auto">
            <Swiper
              // install Swiper modules
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="w-full text-center pb-20">
                  <h2 className="text-2xl font-bold">
                    Connect and manage with your team!
                  </h2>
                  <p className="mt-4">
                    Aziest Jordan is one of the biggest superstars to have
                    immerged from the professional designer in world.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full text-center pb-20">
                  <h2 className="text-2xl font-bold">
                    Connect and manage with your team!
                  </h2>
                  <p className="mt-4">
                    Aziest Jordan is one of the biggest superstars to have
                    immerged from the professional designer in world.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full text-center pb-20">
                  <h2 className="text-2xl font-bold">
                    Connect and manage with your team!
                  </h2>
                  <p className="mt-4">
                    Aziest Jordan is one of the biggest superstars to have
                    immerged from the professional designer in world.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full text-center pb-20">
                  <h2 className="text-2xl font-bold">
                    Connect and manage with your team!
                  </h2>
                  <p className="mt-4">
                    Aziest Jordan is one of the biggest superstars to have
                    immerged from the professional designer in world.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full text-center pb-20">
                  <h2 className="text-2xl font-bold">
                    Connect and manage with your team!
                  </h2>
                  <p className="mt-4">
                    Aziest Jordan is one of the biggest superstars to have
                    immerged from the professional designer in world.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
