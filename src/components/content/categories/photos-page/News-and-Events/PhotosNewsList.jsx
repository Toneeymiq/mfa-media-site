import { PhotoFirebase } from "../photo-firebase";

export function PhotoNewsPage() {

  return (
   <PhotoFirebase category="News and Events" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoNewsLinks.json"/>
  );
}


