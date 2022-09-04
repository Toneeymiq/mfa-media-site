import React from "react";
import NewContent from "../NewContent";

function AddArtsPhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json"
      category=" Arts Photo"
    />
  );
}

export default AddArtsPhoto;
