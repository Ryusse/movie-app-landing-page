import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HeroBackground from '../assets/images/background/heroBackground.jpg'
import SliderHome from '../components/SliderHome'

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        backgroundImage={HeroBackground}
        sliderVisible={true}
        titleVisible={false}
      />
      <main className='content'>
        <h2 className='content__h2'>TRENDS NOW</h2>

        <SliderHome />
      </main>
      <Footer />
    </>
  )
}
