import React from "react";
import NewContent from "../NewContent";

function AddDocumentariesVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/DocumentariesLinks.json"
      category="Mini Documentary"
    />
  );
}

export default AddDocumentariesVideo;
