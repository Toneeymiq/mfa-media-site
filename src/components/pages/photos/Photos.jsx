import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";
import { PhotoArtPage } from "../../content/categories/photos-page/Arts/PhotoArtsList";
import { PhotoClubsPage } from "../../content/categories/photos-page/Clubs-and-societies/PhotosClubsList";
import { PhotoEducationPage } from "../../content/categories/photos-page/Education/PhotoEducationList";
import { PhotoNaturePage } from "../../content/categories/photos-page/Nature/PhotoNatureList";
import { PhotoSportsPage } from "../../content/categories/photos-page/Sports/PhotosSportsList";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
      <PhotoArtPage />
      <PhotoClubsPage />
      <PhotoEducationPage />
      <PhotoSportsPage />
      <PhotoNaturePage />
    </div>
  );
}

export default Photos;
