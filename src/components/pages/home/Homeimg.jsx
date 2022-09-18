import React from "react";
import HomeImgCss from "../../assets/css/homeCss/HomeImg.module.css";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";
import Slider1 from "../../assets/images/background.jpg";
import Slider2 from "../../assets/images/nikon.jpg";
import Slider3 from "../../assets/images/nikon2.jpg";
import Slider from "react-slick";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SliderImages = [
  {
    title: "Mr Lemmuel",
    src: Slider1,
  },
  {
    title: "Nikon1",
    src: Slider2,
  },
  {
    title: "Nikon2",
    src: Slider3,
  },
];

function Homeimg() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <>
  

      <div className={HomeImgCss.slider_container}>
        <Slider {...settings}>
          {SliderImages.map((image) => {
            return (
              <div className={HomeImgCss.welcome_slider}>
                <div className={HomeImgCss.slider_images}>
                  <img src={image.src} alt="" />
                  <h1>{image.title}</h1>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={HomeImgCss.container}>
        <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"  className={HomeImgCss.welcome_message}>
          <h1  className={AnimationCss.fade_in}>Welcome to TDL TV</h1>
          <p className={AnimationCss.tracking_in_expand}>
            We are a branding and experienced highschool Production company
          </p>
        </div>
      </div>
    </>
  );
}

export default Homeimg;
