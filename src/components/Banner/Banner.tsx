import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        rewind={true}
      >
        <SwiperSlide>
          <div className="relative">
          <img
            className="h-[500px] lg:h-[700px] w-full object-cover"
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
            <div className="absolute bg-[#00000080] top-0 left-0 w-full h-full">
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/pinkwall.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
