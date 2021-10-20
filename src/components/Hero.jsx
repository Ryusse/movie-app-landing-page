import Slider from "./Slider";
import HeroBackground from "../assets/images/background/heroBackground.jpg";

const Hero = (movie) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundPosition: "center ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
      }}
    >
      <Slider
        
      />
    </div>
  );
};

export default Hero;
