import FilmCss from "../../assets/css/VideoCss/VideoCss.module.css";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import ArtsLinks from "../../pages/video/ArtsLinks";
import Slider from "react-slick";
import SliderCss from "../../assets/css/overallCss/sliderCss.module.css";
import { settings } from "./SliderSettings";

function Arts() {
  const Settings = settings

  return (
    <>
      <div className={SliderCss.container}>
      <div className={SliderCss.slider_title}>Arts</div>  
      <Slider { ...Settings }>
        {ArtsLinks.map((item) => {
          return (
            <div className={SliderCss.card}>
              <div className={SliderCss.card_top}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      </div>
    </>
  );
}

export default Arts;
