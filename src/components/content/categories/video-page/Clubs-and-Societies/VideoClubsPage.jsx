import { VideoFirebase } from "../video-firebase/video-firebase";

export function VideoClubsPage() {

  return (
   <VideoFirebase category="Clubs and Societies videos" firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoClubs.json"/>
  );
}