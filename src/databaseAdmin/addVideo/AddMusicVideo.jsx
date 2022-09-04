import React from "react";
import NewContent from "../NewContent";

function AddMusicVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/musicLinks.json"
      category="Music video"
    />
  );
}

export default AddMusicVideo;
