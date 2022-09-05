import React from "react";
import HomeCss from "../../../assets/css/homeCss/home.module.css";

import ContentBox from "../../Content-box";
import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import AnimationCss from "../../../assets/css/overallCss/animations.module.css";
import { BsArrowRight } from "react-icons/bs";

function PhotoEducationList(props) {
  return (
    <>
      <div className={VideoCss.category_title}>Education Photos</div>
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
        {props.EducationLinks.map((value) => (
          <ContentBox
            title={value.title}
            name={"By " + value.Name}
            image={
              <div>
                <img src={value.image} alt={value.title} />
              </div>
            }
            link={
              <div
                className={`${VideoCss.photo_container} ${AnimationCss.tracking_in_expand}`}
              >
                {<img src={value.image} alt={value.title} />}
                <div className={VideoCss.Clickedimage_description}>
                  <div className={VideoCss.clickedimage_title}>
                    <p>{value.title}</p>

                    <div className={VideoCss.external_link}>
                      {" "}
                      <h3>{value.Name}</h3>{" "}
                      <a href={value.link} target="_blank" rel="noreferrer">
                        {" "}
                        <h2>
                          Visit Site
                          <BsArrowRight className={VideoCss.arrow} />{" "}
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          ></ContentBox>
        ))}
      </div>
    </>
  );
}

export default PhotoEducationList;
