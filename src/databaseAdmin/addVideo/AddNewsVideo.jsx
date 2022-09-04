import React from "react";
import NewContent from "../NewContent";

function AddNewsVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/videoNewsLinks.json"
      category="News Video"
    />
  );
}

export default AddNewsVideo;
