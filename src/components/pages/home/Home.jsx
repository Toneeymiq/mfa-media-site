import { PhotoArtsSlider } from "../../content/categories/photos-page/PhotoArtsPage";
import { VideoArtsSlider } from "../../content/categories/video-page/VideoArtsPage";
import Photos from "../photos/Photos";
import VideoContent from "../video/Video";
import Homeimg from "./Homeimg";
// import PhotosClubsSlider from "../../content/categories/photos-page/PhotosClubsPage";

function Home() {




  return (
    <>
      <Homeimg />
      <PhotoArtsSlider />
      <VideoArtsSlider />
      <VideoContent />
      <Photos /> 
    </>
  );
}

export default Home;
