import NewContent from "../NewContent";

function AddNewsBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogNewsLinks.json"
      category="Arts Blog"
    />
  );
}

export default AddNewsBlog;