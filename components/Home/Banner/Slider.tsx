"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LeftCard from "./LeftCard";

export default function Slider() {
  return (
    <div className="lg:w-[65%] w-full cursor-pointer">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {Array(3)
          .fill(0)
          .map((element, index) => (
            <SwiperSlide key={index}>
              {/*  @ts-ignore  */}
              <LeftCard
                src={`https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_slide_0${
                  index + 1
                }.jpg`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
