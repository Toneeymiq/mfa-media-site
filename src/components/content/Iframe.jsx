import IframeCss from '../assets/css/contentCss/youtubeIframe.module.css'

function Iframe(props) {
  return (
    <iframe
      className={IframeCss.youtube_iframe}
      width="100%"
      height="100%"
      src={props.linking}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="allowfullscreen"
    ></iframe>
  );
}

export default Iframe;
