import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";
import { PhotoArtsPage } from "../../content/categories/photos-page/Arts/PhotoArtsPage";
import { PhotosClubsPage } from "../../content/categories/photos-page/Clubs-and-societies/PhotosClubsPage";
import { PhotosNaturePage } from "../../content/categories/photos-page/Nature/PhotosNaturePage";
import { PhotoSportsPage } from "../../content/categories/photos-page/Sports/PhotosSportsPage";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
      <PhotoArtsPage />
      <PhotosClubsPage />
      <PhotoSportsPage />
      <PhotosNaturePage />
    </div>
  );
}

export default Photos;
