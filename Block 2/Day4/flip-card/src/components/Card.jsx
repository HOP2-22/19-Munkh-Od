import React from "react";
import pokeball from "../Images/pokeball.png";

const Card = ({ flipped, flip, card }) => {
  return (
    <div
      onClick={() => flip()}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        transform: `rotateY(${flipped ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s",
        borderRadius: "4px",
        boxShadow: "2px 2px 4px 4px #dedede"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={card.image}
          alt="pokeball"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <img
          src={pokeball}
          alt="pokeball"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Card;
