import { useQuery } from '../hooks/useQuery'
import { useDebounce } from '../hooks/useDebounce'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroBackground from '../assets/images/background/hero2Background.jpg'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

export default function Movies() {
  const query = useQuery()
  const search = query.get('search')
  const debouncedSearch = useDebounce(search, 300)

  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={HeroBackground}
        sliderVisible={false}
        titleVisible={true}
        title={'MOVIES LIST'}
      />
      <main className='content'>
        <MoviesList key={debouncedSearch} search={debouncedSearch} />
      </main>
      <Footer />
    </>
  )
}
