import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

import 'swiper/css/navigation'
import MovieCard from './MovieCard'
import movies from '../assets/data/movies.json'
import { useGetWidth } from '../hooks/useGetWidth'

SwiperCore.use([Pagination, Navigation])

export default function SliderHome() {
  const [windowWidth, setWindowWidth] = useState(0)
  useGetWidth(setWindowWidth)
  return (
    <>
      <div className='slider-home-container'>
        <Swiper
          slidesPerView={`${
            windowWidth < 400
              ? 2
              : windowWidth < 760
              ? 3
              : windowWidth < 900
              ? 4
              : 5
          }`}
          spaceBetween={25}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          className='swiper-home'
        >
          {movies.slice(0, 16).map((movie, key) => (
            <SwiperSlide className='swiper-home__slide' key={key}>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
