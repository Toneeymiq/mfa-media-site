import HomeCss from "../assets/css/homeCss/home.module.css";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import VideoModal from "../pages/video/VideoModal";
import AnimationCss from "../assets/css/overallCss/animations.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function ContentBox(props) {
  const [toggleVideo, setToggleVideo] = useState(false);

  return (
    <>
      <div
        className={`${HomeCss.content_box} ${HomeCss.photos}`}
        onClick={props.onClick}
      >
        {toggleVideo ? (
          <></>
        ) : (
          <>
            <div data-aos="fade-up"
              onClick={() => setToggleVideo(true)}
            >
              {props.image}
            </div>
            <div className={HomeCss.content_description}>
              <h1
                className={HomeCss.content_title}
                onClick={() => setToggleVideo(true)}
              >
                {props.title}
              </h1>
              <p className={HomeCss.content_text}>{props.name}</p>
            </div>
          </>
        )}

        {toggleVideo && (
          <>
            <div 
              className={HomeCss.clicked_video}
              // onClick={() => setToggleVideo(false)}
            >
            <VideoModal  onClick={() => setToggleVideo(false)} />
              {props.link}
              {props.imageLink}
              <div
                className={`${HomeCss.external_link} ${AnimationCss.fade_in}`}
              >
                <p>
                  You visited an external link. Press anywhere to exit this
                  screen
                </p>
              </div>

              <div className={HomeCss.untoggle_video}>
                <RiCloseLine
                  color="var(--error-color)"
                  size={40}
                  onClick={() => setToggleVideo(false)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ContentBox;
