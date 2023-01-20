import Common from "../components/Common";
import { useDispatch, useSelector } from "react-redux";
import { getZipcode } from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../redux/cartSlice";
import "../styles/Cart.css";

const Cart = () => {
  const [zipcode, setZipcode] = useState("");
  const [adress, setAdress] = useState("");
  const [zipcodePrice, serZipcodePrice] = useState(0);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleZipcodeClick = (e) => {
    e.preventDefault();

    getZipcode(zipcode).then((response) => {
      console.log(response);
      setAdress(response.results[0].formatted_address);
      serZipcodePrice(30);
      setZipcode("");
    });
  };

  const handleKeepShopping = () => {
    navigate("/shop");
  };

  const handleDeleteClick = (id) => {
    dispath(cartActions.deleteItem(id));
  };

  return (
    <>
      <Common title="Produtos" />
      <section className="cart__container">
        <table>
          <thead>
            <tr>
              <th>Produto(s)</th>
              <th></th>
              <th>Preço</th>
              <th>Qtd</th>
              <th>Apagar</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.totalPrice}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <i
                      onClick={() => handleDeleteClick(item.id)}
                      className="ri-delete-bin-5-line"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="cart__form">
          <h1>Resumo</h1>
          <form onSubmit={handleZipcodeClick}>
            <div className="cart__input-container">
              <input
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
                type="text"
                name="zipcode"
                placeholder="Digite seu cep"
              />
              <button type="submit">Calcular</button>
            </div>
            <span>{adress}</span>
          </form>
          <div className="cart__sub-total">
            <span>Sub-total</span> <span>R${totalAmount.toFixed(2)}</span>
          </div>
          <div className="cart__shipping">
            <span>Frete</span> <span>R${zipcodePrice.toFixed(2)}</span>
          </div>
          <div className="cart__total">
            <h3>Total do Pedido</h3>
            <h3>
              <span>R${(totalAmount + zipcodePrice).toFixed(2)}</span>
            </h3>
          </div>
          <button>Finalizar Compra</button>
          <button onClick={handleKeepShopping}>Continuar Comprando</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
