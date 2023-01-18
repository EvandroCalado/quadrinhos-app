import "../styles/SlideItem.css";

const SlideItem = ({ comic }) => {
  return (
    <div className="slider__item">
      <div className="slider__title">
        <h1>Promoção</h1>
        <h2>{comic.title}</h2>
        <h1>${comic?.prices?.[0]?.price}</h1>
      </div>
      <div className="slider__image">
        <img
          src={`${comic?.images?.[0]?.path}.${comic?.images?.[0]?.extension}`}
          alt="Hq"
        />
      </div>
    </div>
  );
};

export default SlideItem;
