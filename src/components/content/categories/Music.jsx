import MusicLinks from "../../pages/video/MusicLinks";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import SliderSettings, { settings } from "./SliderSettings";

import ContentBox from "../../content/Content-box";
import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";
import { BsPlayBtn } from "react-icons/bs";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";


export function MusicPage() {

  return (
    <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
    <div className={HomeCss.film_title}>
    </div>

  
    { MusicLinks.map((value) => {
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

function Music() {

const Settings = settings

  return (
    <>
    <SliderSettings mapping={MusicLinks} category="Music"/>
    </>
  );
}

export default Music;
