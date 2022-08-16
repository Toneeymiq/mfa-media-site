import HomeCss from "../../assets/css/homeCss/home.module.css";
import ContentBox from "../../content/Content-box";
import PhotographyLinks from "./PhotographyLinks";
import PhotographyCss from "../../assets/css/photographyCss/photographyCss.module.css";

function Photography() {
  return (
    <div className={PhotographyCss.photography_container}>
      <div className={HomeCss.film_title}>
        <h1>Photography</h1>
      </div>
      <div className={HomeCss.content}>
        {PhotographyLinks.map((value) => {
          return (
            <ContentBox
              title={
                <a href={value.link} target="_blank" rel="noreferrer">
                  {value.title}
                </a>
              }
              description={
                <a href={value.link} target="_blank" rel="noreferrer"><p>{value.Description}</p></a>
              }
              image={
                <a href={value.link} target="_blank" rel="noreferrer">
                  <img className={HomeCss.content_img} src={value.image} alt={value.title}></img>
                </a>
              }
            ></ContentBox>
          );
        })}
      </div>
    </div>
  );
}

export default Photography;
