import React from "react";
import NewContent from "../NewContent";

function AddClubsPhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoClubsLinks.json"
      category="Clubs Photo"
    />
  );
}

export default AddClubsPhoto;
