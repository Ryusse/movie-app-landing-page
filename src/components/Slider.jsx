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

        <SwiperSlide className="swiper__slide">
          <div className="container">
            <div className="content">
              <h1 className="content__title">Godzilla</h1>

              <div className="row">
                <div className="row__rating">
                  <svg
                    className="row__rating-star"
                    width="17"
                    height="16"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z"
                      fill="#FAC917"
                    />
                  </svg>
                  <p className="row__rating-number fs-small">9/10</p>
                </div>
                <div className="row__categories">
                  <p className="row__categorie fs-small">Action</p>
                  <p className="row__categorie fs-small">Adventure</p>
                </div>
              </div>

              <p className="content__overview">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit libero
                eget et mollis hendrerit donec, sed eros odio lectus sagittis.
                Integer nam lacus semper sagittis inceptos massa magnis
                hendrerit,
              </p>
            </div>

            <img  className="container__image"src={ImageHero} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper__slide">
          <div className="container">
            <div className="content">
              <h1 className="content__title">Godzilla</h1>

              <div className="row">
                <div className="row__rating">
                  <svg
                    className="row__rating-star"
                    width="17"
                    height="16"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z"
                      fill="#FAC917"
                    />
                  </svg>
                  <p className="row__rating-number fs-small">9/10</p>
                </div>
                <div className="row__categories">
                  <p className="row__categorie fs-small">Action</p>
                  <p className="row__categorie fs-small">Adventure</p>
                </div>
              </div>

              <p className="content__overview">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit libero
                eget et mollis hendrerit donec, sed eros odio lectus sagittis.
                Integer nam lacus semper sagittis inceptos massa magnis
                hendrerit,
              </p>
            </div>

            <img  className="container__image"src={ImageHero} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper__slide">
          <div className="container">
            <div className="content">
              <h1 className="content__title">Godzilla</h1>

              <div className="row">
                <div className="row__rating">
                  <svg
                    className="row__rating-star"
                    width="17"
                    height="16"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 0L10.4718 4.93769L16 5.72945L12 9.57289L12.944 15L7.99998 12.4377L3.05569 15L4.00001 9.57289L0 5.72945L5.52783 4.93769L7.99998 0Z"
                      fill="#FAC917"
                    />
                  </svg>
                  <p className="row__rating-number fs-small">9/10</p>
                </div>
                <div className="row__categories">
                  <p className="row__categorie fs-small">Action</p>
                  <p className="row__categorie fs-small">Adventure</p>
                </div>
              </div>

              <p className="content__overview">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit libero
                eget et mollis hendrerit donec, sed eros odio lectus sagittis.
                Integer nam lacus semper sagittis inceptos massa magnis
                hendrerit,
              </p>
            </div>

            <img  className="container__image"src={ImageHero} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
