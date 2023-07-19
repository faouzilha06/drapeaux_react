import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>//nom du pays
        <h4>{country.capital}</h4>//capital
        <p>Pop. {country.population.toLocaleString()}</p>//population et
        séparateur de millier
      </div>
    </li>
  );
};

export default Card;
