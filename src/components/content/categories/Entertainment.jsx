import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCss from "../../assets/css/overallCss/sliderCss.module.css";
import Music from "./Music";
import Film from "./entertainment/Film";

function Entertainment() {

  return (
    <>
      <Film />
      <Music />
    </>
  );
}

export default Entertainment;
