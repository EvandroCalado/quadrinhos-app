import CarouselCard from "./CarouselCard";
import { useRef } from "react";
import "../styles/Carousel.css";

const Carousel = ({ handleInfoClick, comics, title }) => {
  const carouselRef = useRef(null);

  const handleLeftClick = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const handleRightClick = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  return (
    <div className="carousel__container">
      <h2>{title}</h2>
      <i
        onClick={handleLeftClick}
        className="ri-arrow-left-s-line btn__left"
      ></i>
      <i
        onClick={handleRightClick}
        className="ri-arrow-right-s-line btn__right"
      ></i>
      <div className="carousel__wrapper" ref={carouselRef}>
        {comics?.map(
          (comic) =>
            comic.images[0] && <CarouselCard handleInfoClick={handleInfoClick} key={comic.id} comic={comic} />
        )}
      </div>
    </div>
  );
};

export default Carousel;
