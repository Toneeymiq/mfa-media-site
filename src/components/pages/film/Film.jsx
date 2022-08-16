import ContentBox from "../../content/Content-box";
import FilmCss from "../../assets/css/FilmCss/FilmCss.module.css";
import FilmLinks from "./FIlmLinks";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import { BsPlayBtn } from "react-icons/bs";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";
import LiftMeUp from "../../assets/images/jelly_dollar/liftmeup.png";

function FilmContent() {
  return (
    <div className={`${HomeCss.content} ${FilmCss.film_container}`}>
      <div className={HomeCss.film_title}>
        <h1>Videography</h1>
      </div>
      { FilmLinks&& FilmLinks.map((value) => {
        return (
          <ContentBox key={value.id}
            title={value.title}
            description={value.Description}
            image={
              <div className={HomeCss.video_div}>
                <div className={HomeCss.play_button}>
                  <BsPlayBtn size={40} />
                </div>
                  {value.image}
              </div>
            }
            link={
              <div
                className={`${FilmCss.iframe_container} ${AnimationCss.tracking_in_expand}`}
              >
                {value.link}
              </div>
            }
          ></ContentBox>
        );
      })}
    </div>
  );
}

export default FilmContent;
