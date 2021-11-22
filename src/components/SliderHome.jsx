import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/css/navigation'
import MovieCard from './MovieCard'
import movies from '../assets/data/movies.json'

SwiperCore.use([Autoplay, Pagination, Navigation])

export default function SliderHome() {
  return (
    <div className='slider-home-container'>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 2,
            spaceBetween: 18
          },

          500: {
            slidesPerView: 3
          },

          960: {
            slidesPerView: 4
          },

          1100: {
            slidesPerView: 5
          },

          2000: {
            slidesPerView: 6
          }
        }}
        className='swiper'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        slidesPerView={'auto'}
        spaceBetween={25}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
      >
        {movies.slice(0, 16).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard className='slider-home__slide' movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
