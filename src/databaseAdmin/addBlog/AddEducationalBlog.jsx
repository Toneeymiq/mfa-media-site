import NewContent from "../NewContent";

function AddEducationalBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogEducationalLinks.json"
      category="Educational Blog"
    />
  );
}

export default AddEducationalBlog;