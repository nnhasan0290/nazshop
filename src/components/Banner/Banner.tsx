import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <img
            className="h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/pinkwall.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[500px] lg:h-[700px] w-full object-cover"
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
