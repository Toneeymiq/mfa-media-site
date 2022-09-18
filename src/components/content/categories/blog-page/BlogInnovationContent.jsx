import { BlogFirebase } from "./firebase-fetching/Firebase";

export function BlogInnovationPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogInnovationLinks.json"/>
  );
}


