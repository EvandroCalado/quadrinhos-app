import { useEffect, useState } from "react";
import { getItems, links } from "../api/api";
import Carousel from "../components/Carousel";
import Slider from "../components/Slider";
import "../styles/Home.css";

const Home = () => {
  const [topRated, setTopRated] = useState();
  const [news, setNews] = useState();
  const [marvel, setMarvel] = useState();

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

  return (
    <>
      <Slider />
      <section>
        <Carousel title="Melhores Avaliados" comics={topRated} />
        <Carousel title="Novos" comics={news} />
        <Carousel title="Marvel" comics={marvel} />
      </section>
    </>
  );
};

export default Home;
