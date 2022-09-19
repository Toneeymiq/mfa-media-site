import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoNewsPage() {

  return (
   <VideoFirebase category="News and events" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoNewsLinks.json"/>
  );
}