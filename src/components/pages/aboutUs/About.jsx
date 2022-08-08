import AboutCss from "../../assets/css/aboutCss/about.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={AboutCss.about_container}>
      <div className={AboutCss.about_content}>
        <h1>MFA Media</h1>
        <p>
          MFA Media is an online media platform featuring top Media projects and
          content that has been created by us, students of
          <a href="https://new.mpesafoundationacademy.ac.ke" target="_blank" rel="noreferrer">
            Mpesa Foundation Academy
          </a>
          This content includes Short Films shot in and outside of the school,
          Graphic design projects, professional images taken by the Media
          students to animation and many more. We hope you enjoy our content.
        </p>
      </div>
    </div>
  );
}

export default About;
