import { BlogFirebase } from "./firebase-fetching/Firebase";

export function BlogNewsPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogNewsLinks.json"/>
  );
}


