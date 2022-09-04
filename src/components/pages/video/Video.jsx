import { MusicPage } from "../../content/categories/video-page/Music";
import { FilmPage } from "../../content/categories/video-page/Film";
import { VideoArtsPage } from "../../content/categories/video-page/VideoArtsPage";

function VideoContent() {



  return (
    <div>
      <VideoArtsPage />
      <FilmPage />
      <MusicPage />
    </div>
  );
}

export default VideoContent;
