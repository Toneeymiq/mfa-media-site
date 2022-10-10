import { FilmPage } from "../../content/categories/video-page/Film/Film";
import { MusicPage } from "../../content/categories/video-page/Music/Music";
import HomeCss from "../../assets/css/homeCss/home.module.css";

import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";

function VideoContent() {
  return (
    <div>
      {/* <VideoArtsPage /> */}
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
        <FilmPage />
        <MusicPage />
      </div>
    </div>
  );
}

export default VideoContent;
