import { useEffect } from "react";
import { getItems, links } from "../api/api";
import Slider from "../components/Slider";

const Home = () => {
  // useEffect(() => {
  //   getItems(links.comics, 0, 20).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <>
      <Slider />
      <section>

      </section>
    </>
  );
};

export default Home;
