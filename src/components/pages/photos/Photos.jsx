import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";
import { PhotoArtPage } from "../../content/categories/photos-page/Arts/PhotoArtsList";
import { PhotoClubsPage } from "../../content/categories/photos-page/Clubs-and-societies/PhotosClubsList";
import { PhotoEducationPage } from "../../content/categories/photos-page/Education/PhotoEducationList";
import { PhotoNaturePage } from "../../content/categories/photos-page/Nature/PhotoNatureList";

import HomeCss from "../../assets/css/homeCss/home.module.css";

import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
       <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
      <PhotoArtPage />
      <PhotoClubsPage />
      <PhotoEducationPage />
      <PhotoNaturePage />
    </div>
    </div>
  );
}

export default Photos;
