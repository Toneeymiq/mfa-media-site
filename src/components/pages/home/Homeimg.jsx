import React from "react";
import HomeImgCss from "../../assets/css/homeCss/HomeImg.module.css";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";
import Slider1 from "../../assets/images/background.jpg";
import Slider2 from "../../assets/images/nikon.jpg";
import Slider3 from "../../assets/images/nikon2.jpg";
import Slider from "react-slick";

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
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={HomeImgCss.container}>
        <div className={HomeImgCss.welcome_message}>
          <h1 className={AnimationCss.fade_in}>Welcome to MFA Media Site</h1>
          <p className={AnimationCss.tracking_in_expand}>
            We are a branding and experienced highschool Production company
          </p>
        </div>
      </div>

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
    </>
  );
}

export default Homeimg;
