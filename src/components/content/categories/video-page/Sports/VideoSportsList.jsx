import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoSportsPage() {

  return (
   <VideoFirebase category="Sports" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoSportsLinks.json"/>
  );
}