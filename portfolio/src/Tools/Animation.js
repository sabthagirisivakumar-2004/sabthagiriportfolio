import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Animation.css";
function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="Tools">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://graph.org/file/a162a5d037162a7828e86.jpg"
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div>
            <img
              src="https://graph.org/file/ffc11b377aacf7de3de63.jpg"
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div>
            <img
              src="https://graph.org/file/bdd751aa6059b70f82e62.jpg"
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div>
            <img
              src="https://graph.org/file/9b10e4a6973f437a8573e.jpg"
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div>
            <img
              src="https://graph.org/file/d8dab52a8673a2f95ee4a.jpg"
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
