import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useLocation } from "react-router-dom";

export default function ListingShow() {
  SwiperCore.use([Navigation]);
  const { state } = useLocation();
  return (
    <main>
      <div>
        <Swiper navigation>
          {state.formData.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
