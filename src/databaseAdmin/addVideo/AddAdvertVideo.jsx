import NewContent from "../NewContent";

function AddAdvertVideo() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/videoAdvertLinks.json"
      category="Advert Video"
    />
  );
}

export default AddAdvertVideo;
