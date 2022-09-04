import React from "react";
import NewContent from "../NewContent";

function AddArtsBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogArtsLinks.json"
      category="Arts Blog"
    />
  );
}

export default AddArtsBlog;
