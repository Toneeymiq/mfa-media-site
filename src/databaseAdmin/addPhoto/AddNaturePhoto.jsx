import NewContent from "../NewContent";

function AddNaturePhoto() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/photoNatureLinks.json"
      category="Education Photo"
    />
  );
}

export default AddNaturePhoto;
