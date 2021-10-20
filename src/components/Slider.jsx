import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper";
import ImageHero from "../assets/images/background/godzilla-img.jpg";

SwiperCore.use([Parallax, Pagination, Navigation]);

export default function Slider(movie) {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="swiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <div className="container">
            <div className="container__content">
              <h1>Movie</h1>
              <div className="container__header">
                <div className="container__rating">
                  <svg
                    className="container__rating-star"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z"
                      fill="#FAC917"
                    />
                  </svg>
                  <p className="container__rating-number">9/10</p>
                </div>
                <div className="container__categories">
                  <p>Action</p>
                  <p>Adventure</p>
                </div>
              </div>

              <p className="container__overview">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit libero
                eget et mollis hendrerit donec, sed eros odio lectus sagittis.
                Integer nam lacus semper sagittis inceptos massa magnis
                hendrerit,
              </p>
            </div>

            <img  className="container__image"src={ImageHero} alt="" />
          </div>

          <div className="text" data-swiper-parallax="-100">
            <p>Swiper three</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Swiper two</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
