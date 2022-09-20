import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";
import { PhotoArtPage } from "../../content/categories/photos-page/Arts/PhotoArtsList";
import { PhotoClubsPage } from "../../content/categories/photos-page/Clubs-and-societies/PhotosClubsList";
import { PhotoEducationPage } from "../../content/categories/photos-page/Education/PhotoEducationList";
import { PhotoNaturePage } from "../../content/categories/photos-page/Nature/PhotoNatureList";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
      <PhotoArtPage />
      <PhotoClubsPage />
      <PhotoEducationPage />
      <PhotoNaturePage />
    </div>
  );
}

export default Photos;
