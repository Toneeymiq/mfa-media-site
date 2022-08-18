import HomeCss from "../assets/css/homeCss/home.module.css";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import VideoModal from "../pages/video/VideoModal";
import AnimationCss from '../assets/css/overallCss/animations.module.css'

function ContentBox(props) {
  const [toggleVideo, setToggleVideo] = useState(false);

  return (
    <>
      <div id={props.id}
        className={`${HomeCss.content_box} ${HomeCss.photos}`}
        onClick={props.onClick}
      >
        {toggleVideo ? (
          <></>
        ) : (
          <>
            <div onClick={() => setToggleVideo(true)}>{props.image} </div>
            <div className={HomeCss.content_description}>
              <h1 className={HomeCss.content_title}>{props.title}</h1>
              <p className={HomeCss.content_text}>{props.description}</p>
            </div>
          </>
        )}
        {toggleVideo && (
          <>
          
            <VideoModal onClick={() => setToggleVideo(false)} />
            <div
              className={HomeCss.clicked_video}
              onClick={() => setToggleVideo(false)}
            >
              {props.link}
              <div className={`${HomeCss.external_link} ${AnimationCss.fade_in}`}><p>You visited an external link. Press anywhere to exit this screen</p></div>
              
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
