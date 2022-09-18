import NewContent from "../NewContent";

function AddClubsBlog() {
  return (
    <NewContent
      firebaseLink="https://mfa-media-site-database-default-rtdb.firebaseio.com/blogClubsLinks.json"
      category="Clubs Blog"
    />
  );
}

export default AddClubsBlog;