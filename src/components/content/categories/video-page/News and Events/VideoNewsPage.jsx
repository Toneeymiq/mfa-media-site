import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoNewsPage() {

  return (
   <VideoFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoNewsLinks.json"/>
  );
}