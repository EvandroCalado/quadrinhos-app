import "../styles/Common.css";

const Common = ({ title }) => {
  return (
    <>
      <div className="home__header-back"></div>
      <div className="common__container">
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Common;
