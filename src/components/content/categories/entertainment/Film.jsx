import ContentBox from "../../Content-box";
import FilmCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import FilmLinks from "../../../pages/video/FilmLinks";
import HomeCss from "../../../assets/css/homeCss/home.module.css";
import Slider from "react-slick";
import SliderCss from '../../../assets/css/overallCss/sliderCss.module.css'
import { settings } from "../SliderSettings";

function Film() {

  const Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,

  };
  
  return (
    <>
      <div className={SliderCss.container}>
      <div className={SliderCss.slider_title}>Film</div>  
      <Slider {...Settings}>
        {FilmLinks.map((item) => {
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

export default Film;
