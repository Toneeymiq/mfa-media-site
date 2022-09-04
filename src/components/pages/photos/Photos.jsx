import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";
import { PhotoArtsPage } from "../../content/categories/photos-page/PhotoArtsPage";
import { PhotosClubsPage } from "../../content/categories/photos-page/PhotosClubsPage";
import { PhotoSportsPage } from "../../content/categories/photos-page/PhotosSportsPage";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
      <PhotoArtsPage />
      <PhotosClubsPage />
      <PhotoSportsPage />
    </div>
  );
}

export default Photos;
