import React from "react";
import Card from "../../Core/Card/Card";

import './participants.css';

const Participants = () => {
  return (
    <div className="participants-container">
      <h1>Her kan vi legge til deltagere</h1>
      <div className="card-list">
        <Card />
      </div>
    </div>
  );
};

export default Participants;
