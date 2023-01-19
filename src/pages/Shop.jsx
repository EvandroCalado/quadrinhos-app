import { useEffect, useRef, useState } from "react";
import { getItems, links } from "../api/api";
import CarouselCard from "../components/CarouselCard";
import Modal from "../components/Modal";
import "../styles/Shop.css";

const Shop = () => {
  const [comics, setComics] = useState();
  const [comic, setComic] = useState();
  const [isDetails, setIsDetails] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    getItems(links.comics, 0, 25).then((response) => {
      setComics(response?.data?.results);
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

  const hadleInputClick = (e) => {
    const searchValue = e.target.value;

    const searchComic = comics?.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setComics(searchComic);
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
      <section>
        <div className="shop__head">
          <input
            onChange={hadleInputClick}
            type="text"
            placeholder="Busca..."
          />
          <div className="shop__shop__head-pagination">
            <i className="ri-arrow-left-s-line"></i>
            <p>1</p>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
        <div className="shop__container">
          {comics?.map(
            (comic) =>
              comic?.images?.[0] && (
                <CarouselCard
                  handleInfoClick={handleInfoClick}
                  key={comic?.id}
                  comic={comic}
                />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
