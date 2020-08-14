import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src="https://scontent.fosl3-1.fna.fbcdn.net/v/t1.0-9/11822736_10153065547113549_6681473165694126231_n.jpg?_nc_cat=100&_nc_sid=e3f864&_nc_ohc=KtD-umAwxpYAX8BntyI&_nc_oc=AQnf4RXh-oXgdANNVgfQWTZhxbHu_D8upoSPu5qiKWQHCSra80avYq6x0MQSX_sVGLBvlYALR6qtpoNR_01550Qi&_nc_ht=scontent.fosl3-1.fna&oh=b1fcda225a7784273fceab429788f722&oe=5F5C8816"
      />
        <div className="card-divider">
          <div className="card-calender-top">AUG</div>
          <div className="card-calender">24</div>
        </div>
    </div>
  );
};

export default Card;
