import ModalCss from '../../assets/css/overallCss/modal.module.css'
import AnimationCss from '../../assets/css/overallCss/animations.module.css'

function VideoModal(props) {
  return (
    <div className={`${ModalCss.video_modal} ${AnimationCss.fade_in}`} onClick={props.onClick}></div>
  )
}

export default VideoModal;