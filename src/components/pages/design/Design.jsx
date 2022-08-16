import DesignCss from "../../assets/css/designCss/design.module.css";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import ContentBox from "../../content/Content-box";
import DesignLinks from "./DesignLinks";

function Design() {
  return (
    <div className={DesignCss.design_container}>
      <div className={HomeCss.film_title}>
        <h1>Design</h1>
      </div>
      <div className={HomeCss.content}>
        {DesignLinks.map((value) => {
          return (
            <ContentBox
              title={value.title}
              description={value.Description}
              image={<img src={value.image} alt={value.title}></img>}
            ></ContentBox>
          );
        })}
      </div>
    </div>
  );
}

export default Design;
