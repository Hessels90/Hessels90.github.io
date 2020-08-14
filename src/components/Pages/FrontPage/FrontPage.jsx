import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import "./frontpage.css";

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <FontAwesomeIcon icon={faFutbol} className="logoasdf" size="10x" />
      <h2>
        Velkommen til null-spretten. Jeg tar gjerne imot input for ideer og
        funksjonalitet som jeg kan legge til.
      </h2>

      <a href="/participants"> Trykk her for å navigere til å legge til kamper</a>
    </div>
  );
};

export default FrontPage;
