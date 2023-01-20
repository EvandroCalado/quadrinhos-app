import { useEffect, useRef, useState } from "react";
import { getItems, links } from "../api/api";
import CarouselCard from "../components/CarouselCard";
import Modal from "../components/Modal";
import "../styles/Shop.css";

let currentPage = 1;
let itemsPerPage = 20;

const Shop = () => {
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [comicPerPage, setComicPerPage] = useState(25);
  const [isDetails, setIsDetails] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    getItems(links.comics, page, comicPerPage).then((response) => {
      setComics(response?.data?.results);
    });
  }, [page, comicPerPage]);

  const hadleFooterClick = (direction) => {
    console.log(direction);
    if (direction === "details") {
      setIsDetails(true);
    }

    if (direction === "info") {
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
    e.preventDefault();
    const searchComic = comics?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setComics(searchComic);
  };

  const handleCleanClick = () => {
    getItems(links.comics, 0, 25).then((response) => {
      setComics(response?.data?.results);
    });
    setSearch("");
    setPage(1);
  };

  const handlePaginationClick = (direction) => {
    if (direction === "left") {
      if (page <= 1) {
        return;
      }
      const previousPage = (currentPage = currentPage - 1);
      setPage(previousPage);

      setComicPerPage(itemsPerPage * currentPage);
    }

    if (direction === "right") {
      if (page >= 5) {
        return;
      }
      const nextPage = (currentPage = currentPage + 1);
      setPage(nextPage);

      setComicPerPage(itemsPerPage * currentPage);
    }
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
        <div className="shop__input-contaier">
          <form onSubmit={hadleInputClick} className="shop__form">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Busca..."
            />
            <button type="submit">
              <i className="ri-search-2-line"></i>
            </button>
          </form>
          <button onClick={handleCleanClick}>Limpar</button>
        </div>
        <div className="shop__shop__head-pagination">
          <i
            onClick={() => handlePaginationClick("left")}
            className="ri-arrow-left-s-line"
          ></i>
          <p>{page} de 5</p>
          <i
            onClick={() => handlePaginationClick("right")}
            className="ri-arrow-right-s-line"
          ></i>
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
