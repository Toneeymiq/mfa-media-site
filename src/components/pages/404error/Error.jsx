import ErrorCss from '../../assets/css/errorCss/errorCss.module.css'
import ErrorImg from '../../assets/images/error-page.jpeg'

function Error() {
  return (
    <div className={ErrorCss.error_container}>
      <img src={ErrorImg} alt="" srcset="" />
    </div>
  )
}

export default Error