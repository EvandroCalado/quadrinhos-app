import { useEffect, useRef, useState } from "react";
import { getItems, links } from "../api/api";
import Carousel from "../components/Carousel";
import Modal from "../components/Modal";
import Slider from "../components/Slider";
import "../styles/Home.css";

const Home = () => {
  const [topRated, setTopRated] = useState();
  const [news, setNews] = useState();
  const [marvel, setMarvel] = useState();
  const [comic, setComic] = useState();
  const [isDetails, setIsDetails] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    getItems(links.comics, 0, 20).then((response) => {
      setTopRated(response?.data?.results);
    });

    getItems(links.comics, 21, 40).then((response) => {
      setNews(response?.data?.results);
    });

    getItems(links.comics, 41, 60).then((response) => {
      setMarvel(response?.data?.results);
    });
  }, []);

  const hadleFooterClick = (text) => {
    console.log(text);
    if (text === "details") {
      setIsDetails(true);
    }

    if (text === "info") {
      setIsDetails(false);
    }
  };

  const handleCloseClick = () => {
    modalRef.current.style.display = "none";
  };

  const handleInfoClick = (comic) => {
    setComic(comic);
    modalRef.current.style.display = "flex";
  };

  return (
    <>
      {
        <Modal
          hadleFooterClick={hadleFooterClick}
          handleCloseClick={handleCloseClick}
          comic={comic}
          isDetails={isDetails}
          modalRef={modalRef}
        />
      }
      <div className="home__header-back"></div>
      <Slider />
      <section>
        <Carousel
          handleInfoClick={handleInfoClick}
          title="Melhores Avaliados"
          comics={topRated}
        />
        <Carousel
          handleInfoClick={handleInfoClick}
          title="Lançamentos"
          comics={news}
        />
        <Carousel
          handleInfoClick={handleInfoClick}
          title="Marvel"
          comics={marvel}
        />
      </section>
    </>
  );
};

export default Home;
