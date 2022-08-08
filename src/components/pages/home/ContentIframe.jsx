import HomeCss from "../../assets/css/homeCss/home.module.css";

function ContentIframe() {
  return (
    <div>
        <div className={HomeCss.content_div}>
          <iframe className={HomeCss.content_iframe}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/170XQHjGboQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className={HomeCss.content_description}>
            <h1 className={HomeCss.content_title}>Out of time Short Film</h1>
            <p className={HomeCss.content_text}>By Maxwell Peter</p>
          </div>
        </div>
    </div>
  )
}

export default ContentIframe