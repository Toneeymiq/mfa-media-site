import { VideoFirebase } from "../video-firebase/video-firebase";

export function MusicPage() {

  return (
   <VideoFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/musicLinks.json"/>
  );
}