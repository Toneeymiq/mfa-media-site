import NewContent from "../NewContent";

function AddSportsBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogSportsLinks.json"
      category="Arts Blog"
    />
  );
}

export default AddSportsBlog;