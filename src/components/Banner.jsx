import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/laptops/laptop-01.webp";
import img2 from "../assets/images/laptops/laptop-02.webp";
import img3 from "../assets/images/laptops/laptop-03.webp";
import img4 from "../assets/images/laptops/laptop-04.webp";
import img5 from "../assets/images/laptops/laptop-05.webp";

const laptops = [img1, img2, img3, img4, img5];

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="my-10 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {laptops.map((laptop, id) => (
          <SwiperSlide key={id}>
            <img
              className="mx-auto md:h-[600px]"
              src={laptop}
              alt={`Laptop ${id + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
