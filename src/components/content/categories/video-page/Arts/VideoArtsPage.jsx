import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoArtsPage() {

  return (
   <VideoFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/video/videoArtsLinks.json"/>
  );
}