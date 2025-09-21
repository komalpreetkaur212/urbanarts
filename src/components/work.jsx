import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import w1 from "./g1page.jpg";
import w2 from "./g2page.jpg";
import w3 from "./s1.jpg";
import w4 from "./g6page.jpg";
import w5 from "./g7page.jpg";
import w6 from "./g14.jpg";
import w7 from "./s4.jpg";
import w8 from "./g12.jpg";
import w9 from "./s3.jpg";
import w10 from "./g9page.jpg";

function Work() {
  const images = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];

  return (
    <>
      <div id="work-anchor" style={{ position: "relative", top: "-80px" }}></div>
      <section className="work container-fluid py-4 py-md-5" id="work">
        <div className="container text-center">
          <h2 className="section-title mt-0 mb-3 fade-in mb-4">Our Work</h2>
          <p className="section-subtitle mb-5">
            A showcase of our creative designs & craftsmanship
          </p>

          <div className="carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              className="work-carousel"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="work-card">
                    <img src={img} alt={`Work ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
