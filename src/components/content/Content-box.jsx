import HomeCss from "../assets/css/homeCss/home.module.css";

function ContentBox(props) {
  return (
    <>
      <div className={HomeCss.content_box}>
        <>{props.link}</> 
        <>{props.img}</> 
        <div className={HomeCss.content_description}>
          <h1 className={HomeCss.content_title}>{props.title}</h1>
          <p className={HomeCss.content_text}>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ContentBox;
