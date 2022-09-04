import React from "react";
import NewContent from "../NewContent";

function AddNewsPhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoNewsLinks.json"
      category="News Photo"
    />
  );
}

export default AddNewsPhoto;
