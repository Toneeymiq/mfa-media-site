import '../assets/css/navbarCss/modal.css'

function Modal(props) {
  return (
    <div className='modal fade_in' onClick={props.onClick}></div>
  )
}

export default Modal