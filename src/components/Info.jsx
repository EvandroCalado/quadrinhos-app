const Info = ({ comic }) => {
  return (
    <div className="info">
      <p>
        <b>Idioma:</b> {comic?.textObjects?.[0]?.language}
      </p>
      <p>
        <b>Editora:</b> Marvel
      </p>
      <p>
        <b>Insb:</b> {comic?.issn}
      </p>
      <p>
        <b>Número de páginas:</b> {comic?.pageCount}
      </p>
      <p>
        <b>Formato:</b> {comic?.format}
      </p>
      <div className="info__charecters">
        <b>Personagens:</b>
        {comic?.characters?.items?.map((character, index) => {
          return <p key={index}>{character?.name},</p>;
        })}
      </div>
    </div>
  );
};

export default Info;
