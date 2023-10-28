"use client";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetter } from "@/hooks/api";
import { CATEGORY_GETTER } from "@/hooks/keys";

import Card from "./Card";
import Loader from "./Loader";

export default function Slider() {
  const { data, isLoading } = useGetter({
    endPoint: "/api/categories",
    key: CATEGORY_GETTER,
  });

  return (
    <div className="cursor-grab">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {isLoading &&
          Array(10)
            .fill(0)
            .map((element, index) => (
              <SwiperSlide key={index}>
                <Loader />
              </SwiperSlide>
            ))}
        {!isLoading && (
          <>
            {data.map((element: any, index: number) => (
              <SwiperSlide key={index}>
                <Card {...element} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Card
                title="Baby"
                src={`https://miniture.novaworks.net/wp-content/uploads/2023/10/m2_cat_07.jpeg`}
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
}
