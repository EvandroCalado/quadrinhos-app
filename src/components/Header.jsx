import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
];

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header>
      <div className="header__logo">
        <div className="header__logo-icon">
          <i className="ri-cactus-fill"></i>
        </div>
        <div className="header__logo-title">
          <h3>Sertão</h3>
          <h5>Quadrinhos</h5>
        </div>
      </div>
      <div className="nav__menu">
        <ul>
          {nav__links.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "nav__active" : ""
                }
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__icons">
        <div className="cart">
          <Link to="/cart">
            <i className="ri-shopping-basket-line"></i>
          </Link>
          {cartItems.length === 0 ? "" : <span>{cartItems.length}</span>}
        </div>
        <div className="profile">
          <i className="ri-user-line"></i>
        </div>
        <div className="mobile__menu">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
