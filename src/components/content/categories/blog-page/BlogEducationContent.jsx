import { BlogFirebase } from "./firebase-fetching/Firebase";

export function BlogEducationPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogEducationLinks.json"/>
  );
}


