import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <div className="fullcard1">
      <img
        src={item.img}
        height={"140px"}
        width={"200px"}
        style={{ paddingLeft: "50px", paddingTop: "10px" }}
      />
      <center>
        <h4
          style={{
            color: "black",
            fontSize: "25px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {item.name}
        </h4>
      </center>
    </div>
  );
};

export default Card;
