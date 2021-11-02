import Slider from './Slider'

export default function Hero(props) {
  return (
    <div
      className='hero'
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'auto'
      }}
    >
      {props.titleVisible && <h2 className='hero__title'>{props.title}</h2>}
      {props.sliderVisible && <Slider />}
    </div>
  )
}
