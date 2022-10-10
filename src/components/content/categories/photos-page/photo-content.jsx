import React from "react";
import HomeCss from "../../../assets/css/homeCss/home.module.css";

import ContentBox from "../../Content-box";
import VideoCss from "../../../assets/css/VideoCss/VideoCss.module.css";
import ModalCss from "../../../assets/css/overallCss/modal.module.css";
import AnimationCss from "../../../assets/css/overallCss/animations.module.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { useState } from "react";
import { CloseCircleFilled } from "@ant-design/icons";
// import { UserProfile } from "./userProfile";

function PhotoContent(props) {
  const [toggleUser, settoggleUser] = useState(false);
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
              <div
                className={`${VideoCss.photo_container} ${AnimationCss.tracking_in_expand}`}
              >
                {<img src={value.image} alt={value.title} />}
                <div className={VideoCss.Clickedimage_description}>
                  <div className={VideoCss.clickedimage_title}>
                    <p>{value.title}</p>

                    <div className={VideoCss.external_link}>
                      {" "}
                      {toggleUser ? (
                        <>
                          <div className={VideoCss.userDiv}>
                            <div
                              className={ModalCss.video_modal3}
                              onClick={() => settoggleUser(false)}
                            ></div>

                            <div className={VideoCss.userContainer}>
                              <div
                                className={VideoCss.close_user}
                                onClick={() => settoggleUser(false)}
                              >
                                <CloseCircleFilled size={50} />
                              </div>
                              <div className={VideoCss.user_img}>
                                <img
                                  src="https://images.unsplash.com/profile-1656061594213-94c5e6a23dd7image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                                  alt=""
                                />
                              </div>


                              <div className={VideoCss.user_description}>
                                <h1>{value.Name}</h1>

                                {/* mapping user profile */}


                                <p>Xavier Cee has been doing photography for the last two years</p>
                                <div className={VideoCss.user_portfolio}>
                                  {" "}
                                  <a
                                    href={value.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
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
                            </div>
                          </div>
                        </>
                      ) : (
                        <h3 >
                          {value.Name}
                        </h3>
                      )}
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
                </div>
              </div>
            }
          ></ContentBox>
        ))}
      {/* </div> */}
    </>
  );
}

export default PhotoContent;
