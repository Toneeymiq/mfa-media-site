
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
import { FilmPage } from "../../content/categories/video-page/Film/Film";
import { PhotoArtPage } from "../../content/categories/photos-page/Arts/PhotoArtsList";
import { PhotoClubsPage } from "../../content/categories/photos-page/Clubs-and-societies/PhotosClubsList";
import { PhotoEducationPage } from "../../content/categories/photos-page/Education/PhotoEducationList";
import { PhotoNaturePage } from "../../content/categories/photos-page/Nature/PhotoNatureList";

function Home(props) {




  return (
    <>
      <Homeimg />
      <MusicSlider />
      

      <>
      <div className={VideoCss.category_title}>{props.category}</div>
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
        <PhotoEducationPage />
        <MusicPage />
        <PhotoArtPage />
        <PhotoNaturePage />
        <FilmPage />
        <PhotoClubsPage />

      </div>
    </>
    
    </>
  );
}

export default Home;
