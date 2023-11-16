"use client";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import { useState } from "react";

export default function ImgArea() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="relative rounded-md ">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Thumbs]}
        className="mySwipe2"
        rewind={true}
        loop={true}
        pagination={true}
        style={{
          paddingBottom: "5px",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          borderRadius: "10px",
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img
            className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover max-w-full"
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[300px] sm:h-[500px] lg:h-[700px] w-full object-cover max-w-full"
            src="/imgs/pinkwall.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{ paddingBottom: "5px", borderRadius: "10px" }}
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide>
          <img
            className="h-[50px] object-cover w-full"
            src="/imgs/girlwithbag.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[50px] object-cover w-full"
            src="/imgs/pinkwall.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
