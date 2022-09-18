import { BlogFirebase } from "./firebase-fetching/Firebase";


export function BlogArtsPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogArtsLinks.json"/>
  );
}

