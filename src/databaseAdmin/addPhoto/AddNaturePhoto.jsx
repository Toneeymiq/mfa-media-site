import NewContent from "../NewContent";

function AddNaturePhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoNatureLinks.json"
      category="Nature Photo"
    />
  );
}

export default AddNaturePhoto;
