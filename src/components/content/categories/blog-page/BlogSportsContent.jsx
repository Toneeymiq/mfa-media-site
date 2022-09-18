import { BlogFirebase } from "./firebase-fetching/Firebase";

export function BlogSportsPage() {

  return (
   <BlogFirebase firebase_Link = "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogSportsLinks.json"/>
  );
}

