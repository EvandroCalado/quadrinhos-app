import { useState } from "react";
import { useDispatch } from "react-redux";
import { getZipcode } from "../api/api";
import Details from "../components/Details";
import Info from "../components/Info";
import { cartActions } from "../redux/cartSlice";
import {toast} from "react-toastify"
import "../styles/Modal.css";

const Modal = ({
  hadleFooterClick,
  handleCloseClick,
  comic,
  isDetails,
  modalRef,
}) => {
  const [zipcode, setZipcode] = useState("");
  const [adress, setAdress] = useState("");
  const [shippingValue, setShippingValue] = useState("");

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

  const handleSubmitClick = (e) => {
    e.preventDefault();

    getZipcode(zipcode).then((response) => {
      setAdress(response.results[0].formatted_address);
      setShippingValue(30);
    });
  };

  return (
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

            <button onClick={(e) => handleAddToCart(e)}>
              <i className="ri-shopping-cart-line"></i>Adicionar
            </button>

            <div className="modal__shipping">
              <div className="modal__shipping-content">
                <i className="ri-truck-line"></i>
                <h3>Calcule o frete</h3>
              </div>
              <form
                onSubmit={handleSubmitClick}
                className="modal__shipping-input"
              >
                <input
                  onChange={(e) => setZipcode(e.target.value)}
                  value={zipcode}
                  type="text"
                  placeholder="Digite seu cep"
                />
                <button type="submit">Calcular</button>
              </form>
              <div className="modal__adress">
                <span>{adress}</span>
                {shippingValue && (
                  <span>Valor do frete: R${shippingValue.toFixed(2)}</span>
                )}
              </div>
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
  );
};

export default Modal;
