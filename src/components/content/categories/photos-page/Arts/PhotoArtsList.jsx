import { PhotoFirebase } from "../photo-firebase";
import allCss from "../../../../assets/css/VideoCss/VideoCss.module.css";
export function PhotoArtPage() {

  return (

    <div className={allCss.content_box}>
      <PhotoFirebase category="Arts Photos" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json"/>
    </div>
  );
}