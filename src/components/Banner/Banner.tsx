import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";

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
              className="h-[500px] lg:h-[700px] w-full object-cover"
              src="/imgs/girlwithbag.jpg"
              alt=""
            />
            <div className="absolute bg-[#00000080] top-0 left-0 w-full h-full text-white flex">
              <div className="flex items-center justify-center flex-col ml-[100px]">
                <h2 className="text-[4rem] font-extrabold uppercase">
                  Sweater Weather
                </h2>
                <p className="text-xl">
                  Sweater outfit take your styles into new heights and keep you
                  warm and Toasty.
                </p>
                <button className="p-3 border px-5 my-4 gradient_btn uppercase font-bold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/pinkwall.jpg"
            alt=""
          />
          <div className="absolute bg-[#00000080] top-0 left-0 w-full h-full text-white flex">
            <div className="flex lg:items-center items-start justify-center flex-col ml-[100px]">
              <h2 className="lg:text-[4rem] text-[2rem] lg:font-extrabold font-bold uppercase">
                Sweater Weather
              </h2>
              <p className="lg:text-xl">
                Sweater outfit take your styles into new heights and keep you
                warm and Toasty.
              </p>
              <button className="p-3 border px-5 my-4 gradient_btn uppercase font-bold">
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
