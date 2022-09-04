import React from "react";
import HomeCss from "../../../assets/css/homeCss/home.module.css";

import { BsPlayBtn } from "react-icons/bs";
import ContentBox from "../../Content-box";
import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import AnimationCss from "../../../assets/css/overallCss/animations.module.css";

function MusicList(props) {
  return (
    <>
      <div className={VideoCss.category_title}>Music Videos</div>
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
        {props.MusicLinks.map((value) => (
          <ContentBox
            title={value.title}
            name={"By " + value.Name}
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
                <iframe
                  width="560"
                  height="315"
                  src={value.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            }
          ></ContentBox>
        ))}
      </div>
    </>
  );
}

export default MusicList;