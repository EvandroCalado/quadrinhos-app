import "../styles/Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="header__logo">
        <div className="header__logo-icon">
          <i className="ri-cactus-fill"></i>
        </div>
        <div className="header__logo-title">
          <h3>Sertão</h3>
          <h5>Quadrinhos</h5>
        </div>
      </div>
      <div className="footer__title">
        <p>
          Desenvolvido por Evandro Calado <span>{year}</span>
        </p>
      </div>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/evandro-calado/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-linkedin-line"></i>
        </a>
        <a
          href="https://github.com/EvandroCalado"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-github-line"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
