import { useEffect, useRef, useState } from "react";
import { getItems, links } from "../api/api";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import Info from "../components/Info";
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
      <div className="modal__container" ref={modalRef}>
        <div className="modal">
          <i onClick={handleCloseClick} className="ri-close-line"></i>
          <div className="modal__content-container">
            <div className="modal__image">
              <img
                src={`${comic?.images?.[0]?.path}.${comic?.images?.[0]?.extension}`}
                alt={comic?.title}
              />
            </div>
            <div className="modal__content">
              <h2>{comic?.title}</h2>
              <h1>${comic?.prices?.[0]?.price}</h1>
              <p>Em estoque</p>
              <p>
                <span>8</span> itens
              </p>

              <button>
                <i className="ri-shopping-cart-line"></i>Adicionar
              </button>

              <div className="modal__shipping">
                <div className="modal__shipping-content">
                  <i className="ri-truck-line"></i>
                  <h3>Calcule o frete</h3>
                </div>
                <div className="modal__shipping-input">
                  <input type="text" placeholder="Apenas números" />
                  <button>Calcular</button>
                </div>
                <span>correios R$44,26</span>
              </div>
            </div>
          </div>

          <div className="modal__footer">
            <div className="modal__footer-title">
              <h3 onClick={() => hadleFooterClick("details")}>Detalhes</h3>
              <h3 onClick={() => hadleFooterClick("info")}>Mais informações</h3>
            </div>
            {isDetails ? <Details comic={comic} /> : <Info comic={comic} />}
          </div>
        </div>
      </div>
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
          title="Novos"
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
