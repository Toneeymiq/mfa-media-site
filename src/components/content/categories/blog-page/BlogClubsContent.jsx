import { BlogFirebase } from "./firebase-fetching/Firebase";

export function BlogClubsPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogClubsLinks.json"/>
  );
}

