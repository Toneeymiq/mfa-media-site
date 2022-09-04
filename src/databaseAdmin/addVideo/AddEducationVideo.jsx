import React from "react";
import NewContent from "../NewContent";

function AddEducationVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/videoEducationLinks.json"
      category="Education video"
    />
  );
}

export default AddEducationVideo;
