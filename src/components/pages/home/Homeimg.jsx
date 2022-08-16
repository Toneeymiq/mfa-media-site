import React from "react";
import HomeImgCss from "../../assets/css/homeCss/HomeImg.module.css";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";

function Homeimg() {
  return (
    <>
      <div className={HomeImgCss.container}>
        <div className={HomeImgCss.welcome_message}>
          <h1 className={AnimationCss.fade_in}>Welcome to MFA Media Site</h1>
          <p className={AnimationCss.tracking_in_expand}>We are a branding and experienced highschool Production company</p>
        </div>
      </div>
    </>
  );
}

export default Homeimg;
