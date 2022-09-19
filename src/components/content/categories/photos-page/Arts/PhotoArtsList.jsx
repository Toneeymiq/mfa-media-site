import { PhotoFirebase } from "../photo-firebase";

export function PhotoArtPage() {

  return (
   <PhotoFirebase category="Arts Photos" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json"/>
  );
}