import Slider from './Slider';
import HeroBackground from '../assets/images/background/heroBackground.jpg';

export default Hero = () => {
	return (
		<div
			className='hero'
			style={{
				backgroundImage: `url(${HeroBackground})`,
				backgroundPosition: 'center ',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				imageRendering: 'auto',
			}}>
			<Slider />
		</div>
	);
};
