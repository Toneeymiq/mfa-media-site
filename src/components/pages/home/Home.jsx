
import { MusicSlider } from "../../content/categories/video-page/Music/MusicList";
import Homeimg from "../home/Homeimg";

import React from "react";
import HomeCss from "../../assets/css/homeCss/home.module.css";

import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";
import Photos from "../photos/Photos";
import VideoContent from "../video/Video";
import { VideoArtsPage } from "../../content/categories/video-page/Arts/VideoArtsPage";
import { MusicPage } from "../../content/categories/video-page/Music/Music";
import { VideoFirebase } from "../../content/categories/video-page/video-firebase/video-firebase";

function Home(props) {




  return (
    <>
      <Homeimg />
      <MusicSlider />
      

      <>
      <div className={VideoCss.category_title}>{props.category}</div>
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>

        <Photos />
        <VideoContent />
      </div>
    </>
      
      {/* <Photos />  */}
    </>
  );
}

export default Home;
