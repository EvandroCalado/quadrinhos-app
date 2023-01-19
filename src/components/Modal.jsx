import Details from "../components/Details";
import Info from "../components/Info";
import "../styles/Modal.css";

const Modal = ({
  hadleFooterClick,
  handleCloseClick,
  comic,
  isDetails,
  modalRef,
}) => {
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
  );
};

export default Modal;
