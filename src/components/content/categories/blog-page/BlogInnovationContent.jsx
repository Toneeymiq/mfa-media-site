import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import BlogCss from "../../../assets/css/blogCss/BLogPage.module.css";

function BlogInnovationContent(props) {
  return (
    <>
      <div className={VideoCss.category_title}>The Blog</div>
      {props.BlogsContent.map((value) => (
        <>
          <div className={BlogCss.blog_container}>
            <div>
              <div className={BlogCss.blog_content}>
                <div className={BlogCss.content_image}>
                  <img src={value.image} alt={value.title} />
                </div>
                <div className={BlogCss.blog_description}>
                  <div className={BlogCss.description_wrapper}>
                    <div className={BlogCss.blog_title}>
                      <h2>{value.title}</h2>{" "}
                    </div>
                    <p>{value.Description}</p>
                    <div className={BlogCss.date}>
                      <p>{value.Name}</p>
                      <p>{value.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default BlogInnovationContent;