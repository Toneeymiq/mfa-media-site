import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FilmPage } from "./Film";
import { MusicPage } from "./Music";

function Entertainment() {

  return (
    <>
      <MusicPage />
      <FilmPage />
    </>
  );
}

export default Entertainment;
