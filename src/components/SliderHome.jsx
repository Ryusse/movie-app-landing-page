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

// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Pagination, Navigation } from 'swiper'

// import 'swiper/css/navigation'
// import MovieCard from './MovieCard'
// import movies from '../assets/data/movies.json'
// SwiperCore.use([Pagination, Navigation])

// export default function SliderHome() {
//   const swiper = new Swiper('.swiper', {
//     // Default parameters
//     slidesPerView: 2,
//     spaceBetween: 10,
//     // Responsive breakpoints
//     breakpoints: {
//       // when window width is >= 320px
//       640: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       1000: {
//         slidesPerView: 4,
//         spaceBetween: 30
//       },
//       // when window width is >= 640px
//       1500: {
//         slidesPerView: 6,
//         spaceBetween: 40
//       }
//     }
//   })

//   return (
//     <div className='slider-home-container'>
//       <Swiper
//         className='.swiper'
//         slidesPerView={'auto'}
//         spaceBetween={0}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         navigation={true}
//       >
//         {movies.slice(0, 16).map((movie) => (
//           <SwiperSlide className='slider-home__slide' key={movie.id}>
//             <MovieCard movie={movie} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }
