import { BlogArtsPage } from "../../content/categories/blog-page/BlogArtsContent";
import { BlogClubsPage } from "../../content/categories/blog-page/BlogClubsContent";
import { BlogNewsPage } from "../../content/categories/blog-page/BlogNewsContent";

function Services() {
  return (
    <>
      {" "}
      <BlogArtsPage />
      <BlogClubsPage />
      <BlogNewsPage />
    </>
  );
}

export default Services;
