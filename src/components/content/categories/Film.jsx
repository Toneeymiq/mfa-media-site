import FilmCss from "../../assets/css/VideoCss/VideoCss.module.css";
import FilmLinks from "../../pages/video/FilmLinks";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import Slider from "react-slick";
import SliderCss from "../../assets/css/overallCss/sliderCss.module.css";


import ContentBox from "../Content-box";
import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";
import { BsPlayBtn } from "react-icons/bs";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";


export function FilmPage() {
  return (
    <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
    <div className={HomeCss.film_title}>
    </div>
    { FilmLinks.map((value) => {
      return (
        <ContentBox 
          title={value.title}
          description={value.Description}
          image={
            <div className={HomeCss.video_div}>
              <div className={HomeCss.play_button}>
                <BsPlayBtn size={40} />
              </div>
              <img src={value.image} alt="" />
            </div>
          }
          link={
            <div
              className={`${VideoCss.iframe_container} ${AnimationCss.tracking_in_expand}`}
            >
              {value.link}
            </div>
          }
        ></ContentBox>
      );
    })}
  </div>
  )
}

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
                  <a href="#/video/film">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </a>
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
