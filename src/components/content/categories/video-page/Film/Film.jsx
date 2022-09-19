import { VideoFirebase } from "../video-firebase/video-firebase";

export function FilmPage() {

  return (
   <VideoFirebase category="Short film" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/filmLinks.json"/>
  );
}