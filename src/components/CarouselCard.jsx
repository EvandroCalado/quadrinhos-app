import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
import { toast } from "react-toastify"
import "../styles/CarouselCard.css";

const CarouselCard = ({ handleInfoClick, comic }) => {
  const dispatch = useDispatch();

  const comicImage = `${comic?.images?.[0]?.path}.${comic?.images?.[0]?.extension}`;
  const comicPrice = comic?.prices?.[0]?.price;

  const handleAddToCart = () => {
    dispatch(
      cartActions.addItem({
        id: comic.id,
        image: comicImage,
        title: comic.title,
        price: comicPrice,
      })
    );
    toast.success("Adicionado ao carrinho !")
  };

  return (
    <div className="carousel__item">
      <div className="carousel__image">
        <div className="carousel__image-fade">
          <h5>{comic.title}</h5>
          <h2>${comicPrice}</h2>
          <div className="carousel__image-fade-content">
            <button onClick={handleAddToCart}>
              <i className="ri-shopping-cart-line"></i> Adicionar
            </button>
            <i
              onClick={() => handleInfoClick(comic)}
              className="ri-information-line"
            ></i>
          </div>
        </div>
        <img src={comicImage} alt={comic?.title} />
      </div>
    </div>
  );
};

export default CarouselCard;
