import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoArtsPage() {

  return (
   <VideoFirebase category="Arts and lifestyle Videos" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoArtsLinks.json"/>
  );
}