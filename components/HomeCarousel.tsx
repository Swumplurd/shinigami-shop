import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Button, Card, Col, Image, Row, Text } from "@nextui-org/react";
import "swiper/css/pagination";
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
            type: "progressbar",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          effect="fade"
          className="home-swiper"
          autoplay={{ delay: 3500 }}
          style={{ width: "100%", height: "100%", aspectRatio: 16 / 6 }}
        >
          <SwiperSlide>
            <Card css={{ w: "100%" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    Bienvenidos a
                  </Text>
                  <Text h2 color="White">
                    Shinigami Shop
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"/img/0.png"}
                  css={{ aspectRatio: 16 / 6 }}
                  objectFit="fill"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={12}>
                      Available soon.
                    </Text>
                    <Text color="#000" size={12}>
                      Get notified.
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Notify Me
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/1.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/2.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/3.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/4.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/5.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              objectFit="fill"
              src={"/img/6.jpg"}
              alt="Default Image"
              style={{ aspectRatio: 16 / 6 }}
            />
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
};
