import ContentBox from "../../Content-box";
import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import AnimationCss from "../../../assets/css/overallCss/animations.module.css";
import { RiExternalLinkLine } from "react-icons/ri";
// import { UserProfile } from "./userProfile";

function PhotoContent(props) {
  return (
    <>
      <div className={VideoCss.category_title}>{props.category}</div>
      {/* <div className={`${HomeCss.content} ${VideoCss.film_container}`}> */}
      {props.PhotosContent.map((value) => (
        <ContentBox
          title={value.title}
          name={"By " + value.Name}
          image={
            <div>
              <img src={value.image} alt={value.title} />
            </div>
          }
          link={
            <>
              <div
                className={`${VideoCss.photo_container} ${AnimationCss.tracking_in_expand}`}
              >
                {/* <div className={VideoCss.Clickedimage_description}>
                <div className={VideoCss.clickedimage_title}>
                  <p>{value.title}</p>

                  <div className={VideoCss.external_link}>
                    {" "}
                    <a href={value.link} target="_blank" rel="noreferrer">
                      {" "}
                      <h2>
                        Visit Portfolio
                        <RiExternalLinkLine
                          size={25}
                          className={VideoCss.arrow}
                        />{" "}
                      </h2>
                    </a>
                  </div>
                </div>
              </div> */}
                {
                  <div className={VideoCss.photo_container_img}>
                    {" "}
                    <img src={value.image} alt={value.title} />
                    <a href={value.link} target="_blank" rel="noreferrer">
                      <h6>
                        Visit Portfolio
                        <RiExternalLinkLine
                          size={25}
                          className={VideoCss.arrow}
                        />{" "}
                        By {value.Name}
                      </h6>
                    </a>
                  </div>
                }{" "}
              </div>
            </>
          }
        ></ContentBox>
      ))}
      {/* </div> */}
    </>
  );
}

export default PhotoContent;
