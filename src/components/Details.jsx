const Details = ({ comic }) => {
  return (
    <div className="details">
      <p>{comic?.description}</p>
      <p>
        <b>Volume:</b> {comic?.issueNumber}
      </p>
      <p>
        <b>Número de páginas:</b> {comic?.pageCount}
      </p>
      <p>
        <b>Fomato:</b> {comic?.format}
      </p>
    </div>
  );
};

export default Details;
