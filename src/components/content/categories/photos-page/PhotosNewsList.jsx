import HomeCss from "../../../assets/css/homeCss/home.module.css";

import ContentBox from "../../Content-box";
import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import AnimationCss from "../../../assets/css/overallCss/animations.module.css";


function PhotoNewsList(props) {
    return (
      <>
      <div className={VideoCss.category_title}>News Photos</div>
        <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
          {props.NewsLinks.map((value) => (
              <ContentBox
                title={value.title}
                name={"By " + value.Name}
                image={
                  <div>
                    <img src={value.image} alt={value.title} />
                  </div>
                }
                link={
                  <div className={`${VideoCss.photo_container} ${AnimationCss.tracking_in_expand}`}>
                   { <img src={value.image} alt={value.title} />}
                    <p>Visit Site</p>
                  </div>
                }
              ></ContentBox>
              ))}
        </div>
        </>
      );
}

export default PhotoNewsList