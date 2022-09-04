import NewContent from "../NewContent";

function AddInnovationBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogInnovationLinks.json"
      category="Arts Blog"
    />
  );
}

export default AddInnovationBlog;