import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ data }) => {
  const { Title, Year, Poster } = data;

  return (
    <div className="filmCard">
      <img src={Poster} alt="" className="filmCard__poster" />
      <div className="filmCard__body">
        <div className="filmCard__description">
          <h3>{Title}</h3>
          <span>{Year}</span>
        </div>
        <Link to={`/${Title}`}>
          <button className="button btn-2">Lihat Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
