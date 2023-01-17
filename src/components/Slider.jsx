import { useEffect, useRef, useState } from "react";
import { getItems, links } from "../api/api";
import "../styles/Slider.css";
import SlideItem from "./SlideItem";

const Slider = () => {
  const [comics, setComics] = useState();
  const sliderRef = useRef(null);

  useEffect(() => {
    getItems(links.comics, 20, 5).then((response) => {
      setComics(response.data.results);
    });
  }, []);

  const handleLeftClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleRightClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className="slider__container">
      <i
        onClick={handleLeftClick}
        className="ri-arrow-left-s-line slider-btn"
      ></i>
      <i
        onClick={handleRightClick}
        className="ri-arrow-right-s-line slider-btn"
      ></i>
      <div className="slider__wrapper" ref={sliderRef}>
        {comics?.map((comic) => (
          <SlideItem key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
