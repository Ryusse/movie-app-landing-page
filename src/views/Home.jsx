import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HeroBackground from '../assets/images/background/heroBackground.jpg'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={HeroBackground}
        sliderVisible={true}
        titleVisible={false}
      />
      <main className='content'>
        <h2 className='content__h2'>TRENDS NOW</h2>
      </main>
      <Footer />
    </>
  )
}
