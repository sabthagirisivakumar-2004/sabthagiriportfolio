import React from "react";
import "./card.css";
const Card = ({item}) => {
  return (
    <div className="fullcard">
    <img src={item.img} height={"200px"} width={"350px"}/>
      <h4 style={{ color: "black",paddingTop:"0px",paddingLeft:"10px"}}>{item.name}</h4>
      <p style={{paddingLeft:"10px",paddingTop:"0px"}}>{item.description}</p>
      <a href={item.link} style={{paddingLeft:"10px"}} target="_blank">Visit ↗</a>
    </div>
  );
};

export default Card;
