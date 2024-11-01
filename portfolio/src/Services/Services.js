import React from "react";
import "./Services.css";
import Card from "./Card";
import D from "./Data.json";
const Services = () => {
  return (
    <>
      <hr className="dot2" />
      <h1 className="services">SERVICES</h1>
     
      <div className="Service-Container">
        {D.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Services;
