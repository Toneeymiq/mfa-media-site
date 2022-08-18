import HomeCss from "../../assets/css/homeCss/home.module.css";
import ContentBox from "../../content/Content-box";
import PhotosLinks from "./PhotoLinks";
import PhotosCss from "../../assets/css/photographyCss/photographyCss.module.css";

function Photos() {
  return (
    <div className={PhotosCss.photography_container}>
      <div className={HomeCss.content}>
        {PhotosLinks.map((value) => {
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

export default Photos;
