import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Header = (movie) => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(179deg, rgba(0, 0, 0, 0.3) 0%, #000000 115%) ,url(${movie.image})`,
        backgroundPosition: "center ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
      }}
    >
      <Navbar />
      <div className="intro">
        <h1 className="intro__title">{movie.title}</h1>
        <p className="intro__content">{movie.content}</p>
        <p className="intro__genres">{movie.genres}</p>
        <Button content="Watch" className="button--cta" />
      </div>
    </header>
  );
};

export default Header;
