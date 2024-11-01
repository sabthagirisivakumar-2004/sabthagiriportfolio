import React from "react";
import "./Zora.css";
import Card from "./card";
import d from "./data.json";
const Zora = () => {
  return (
    <>
      <hr className="dot1" />
      <h1 className="project">PROJECTS</h1>
      <div className="project-container">
        {d.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Zora;
