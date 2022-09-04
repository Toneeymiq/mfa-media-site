import React from "react";
import NewContent from "../NewContent";

function AddArtsVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/videoArtsLinks.json"
      category="Arts Video"
    />
  );
}

export default AddArtsVideo;
