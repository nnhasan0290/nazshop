import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        rewind={true}
        loop={true}
        pagination={true}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover "
              src="/imgs/girlwithbag.jpg"
              alt=""
            />
            <div className="absolute bg-[#00000080] top-0 left-0 w-full h-full text-white flex">
              <div className="flex items-center lg:justify-center justify-end flex-col lg:ml-[100px] ml-5 gap-2">
                <h2 className="lg:text-[4rem] text-[1rem] lg:font-extrabold font-bold uppercase">
                  Sweater Weather
                </h2>
                <p className="lg:text-xl text-xs text-center">
                  Sweater outfit take your styles into new heights and keep you
                  warm and Toasty.
                </p>
                <button className="lg:p-3 border lg:px-5 px-2 lg:my-4 max-lg:mb-9 gradient_btn uppercase font-bold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/pinkwall.jpg"
            alt=""
          />
          <div className="absolute bg-[#00000080] top-0 left-0 w-full h-full text-white flex">
            <div className="flex items-center lg:justify-center justify-end flex-col lg:ml-[100px] ml-5 gap-2">
              <h2 className="lg:text-[4rem] text-[1rem] lg:font-extrabold font-bold uppercase">
                Sweater Weather
              </h2>
              <p className="lg:text-xl text-xs text-center">
                Sweater outfit take your styles into new heights and keep you
                warm and Toasty.
              </p>
              <button className="lg:p-3 border max-lg:mb-9 lg:px-5 px-2 my-4 gradient_btn uppercase font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
