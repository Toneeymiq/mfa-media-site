import ErrorCss from '../../assets/css/errorCss/errorCss.module.css'

function Error() {
  return (
    <div className={ErrorCss.error_container}>
        <p>404 error. Page not found</p>
    </div>
  )
}

export default Error