import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Card, Image } from "@nextui-org/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export const HomeCarousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Card variant="bordered">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="home-swiper"
          autoplay={{ delay: 3500 }}
          style={{ width: "100%", height: "100%", aspectRatio: 16 / 6 }}
        >
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/0.png"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/1.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/2.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/3.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/4.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/5.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image objectFit="fill" src={"/img/6.jpg"} alt="Default Image" style={{aspectRatio: 16 / 6}}/>
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
};
