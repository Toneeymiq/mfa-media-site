import React from "react";
import NewContent from "../NewContent";

function AddSportsPhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoSportsLinks.json"
      category="Sports Photo"
    />
  );
}

export default AddSportsPhoto;
