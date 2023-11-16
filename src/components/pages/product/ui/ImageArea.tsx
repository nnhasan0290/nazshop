"use client";

import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

export default function ImgArea() {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        rewind={true}
        loop={true}
        pagination={true}
      >
        <SwiperSlide>
          <div>
            <img
              className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover max-w-full"
              src="/imgs/girlwithbag.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover max-w-full"
              src="/imgs/girlwithbag.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover "
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
