import "../styles/CarouselCard.css";

const CarouselCard = ({ comic }) => {
  return (
    <div className="carousel__item">
      <div className="carousel__image">
        <div className="carousel__image-fade">
          <h5>{comic.title}</h5>
          <h2>$14,99</h2>
          <div className="carousel__image-fade-content">
            <button>Add to cart</button>
            <i className="ri-information-line"></i>
          </div>
        </div>
        <img
          src={`${comic?.images?.[0]?.path}.${comic?.images?.[0]?.extension}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default CarouselCard;
