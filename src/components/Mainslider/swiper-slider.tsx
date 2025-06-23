"use client";
import * as React from "react";
import bannerTwo from "@/data/bannerTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "./swiper.css";
import { categoryData } from "@/data/categoryData";
import { Settings } from "lucide-react";
const { subTitle, title, bottomText, slides } = bannerTwo;
export interface ISwiperSliderProps {}

export default function SwiperSlider(props: ISwiperSliderProps) {
  return (
    <div className="relative container">
      <div
        style={{ width: "80px" }}
        className="absolute left-0 z-10 items-center justify-center"
      >
        <div className="flex flex-col items-center bg-white py-5 text-center transition duration-300">
          <div className="mb-2">
            <Settings />
          </div>
          <p className="text-sm font-medium">All</p>
        </div>
      </div>
      <Swiper
        speed={7000}
        slidesPerView={"auto"}
        freeMode={false}
        spaceBetween={20}
        loop={true}
        loopAdditionalSlides={1} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        allowTouchMove={false}
        simulateTouch={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="infinite-slider h-full w-full"
      >
        {categoryData.map((category) => (
          <SwiperSlide key={category.id} style={{ width: "140px" }}>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center transition duration-300">
              <div className="mb-2">{category.icon}</div>
              <p className="text-sm font-medium">{category.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
