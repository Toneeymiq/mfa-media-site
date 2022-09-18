import { VideoArtsPage } from "../../content/categories/video-page/Arts/VideoArtsPage";
import { FilmPage } from "../../content/categories/video-page/Film/Film";
import { MusicPage } from "../../content/categories/video-page/Music/Music";

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
