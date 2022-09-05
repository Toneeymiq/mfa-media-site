import { Link } from "react-router-dom";
import Slider from "react-slick";
import SliderCss from "../../assets/css/overallCss/sliderCss.module.css";

export const settings = {
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
      {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
  ],
};

function SliderSettings(props) {
  return (
    <>
      <div>
        <div className={SliderCss.container}>
          <div className={SliderCss.slider_title}>{props.category}</div>
          <Slider {...settings}>
            {props.mapping.map((item) => {
              return (
                <div className={SliderCss.card}>
                  <div className={SliderCss.card_top}>
                    <a href={item.path}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Link to={props.path}>
            <div className={SliderCss.see_more}> <p>See more {props.category}</p> </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SliderSettings;
