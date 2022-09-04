import AnimationCss from "../assets/css/overallCss/animations.module.css";
import ModalCss from "../assets/css/overallCss/modal.module.css";

function SearchModal(props) {
  return (
    <div
      className={`${AnimationCss.fade_in} ${ModalCss.video_modal2}`}
      onClick={props.onClick}
    ></div>
  );
}

export default SearchModal;
