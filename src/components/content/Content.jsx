import HomeCss from "../assets/css/homeCss/home.module.css";

import ContentBox from "./Content-box";
import ContentLinks from "./ContentLinks";

function Content() {
  return (
    <div className={HomeCss.content}>
      {ContentLinks.map((value) => {
        return (
          <ContentBox
            title={value.title}
            description={value.Description}
            link={value.link}
            img={value.image}
            linking={value.linking}
          ></ContentBox>
        );
      })}
    </div>
  );
}

export default Content;
