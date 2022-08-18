import MusicLinks from "../../pages/video/MusicLinks";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import Slider from "react-slick";
import SliderCss from '../../assets/css/overallCss/sliderCss.module.css'
import { settings } from "./SliderSettings";

function Music() {

const Settings = settings

  return (
    <>
      <div className={SliderCss.container}>
     <div className={SliderCss.slider_title}>Music</div>   
        <Slider { ...Settings }>
          {MusicLinks.map((item) => {
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

export default Music;
