import React from "react";
import NewContent from "../NewContent";

function AddEducationPhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoEducationLinks.json"
      category="Education Photo"
    />
  );
}

export default AddEducationPhoto;
