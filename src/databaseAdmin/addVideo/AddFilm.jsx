import React from "react";
import NewContent from "../NewContent";

function AddFilm() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/filmLinks.json"
      category="Short film"
    />
  );
}

export default AddFilm;
