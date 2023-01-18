import "../styles/CarouselCard.css";

const CarouselCard = ({ handleInfoClick, comic }) => {


  return (
    <div className="carousel__item">
      <div className="carousel__image">
        <div className="carousel__image-fade">
          <h5>{comic.title}</h5>
          <h2>${comic?.prices?.[0]?.price}</h2>
          <div className="carousel__image-fade-content">
            <button><i className="ri-shopping-cart-line"></i> Adicionar</button>
            <i onClick={() => handleInfoClick(comic)} className="ri-information-line"></i>
          </div>
        </div>
        <img
          src={`${comic?.images?.[0]?.path}.${comic?.images?.[0]?.extension}`}
          alt={comic?.title}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
