import AnimationCss from "../assets/css/overallCss/animations.module.css";
import ModalCss from "../assets/css/overallCss/modal.module.css";

function Modal(props) {
  return (
    <div
      className={`${AnimationCss.fade_in} ${ModalCss.modal}`}
      onClick={props.onClick}
    ></div>
  );
}

export default Modal;
