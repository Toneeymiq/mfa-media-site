import NewContent from "../NewContent";

function AddClubsVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/videoClubsLinks.json"
      category="Clubs video"
    />
  );
}

export default AddClubsVideo;
