import Swal from 'sweetalert2'

export default () => {
  function alert ({
    type,
    title,
    text,
  }) {
    const defaultTitle = (() => {
      switch (type) {
        case 'success':
          return 'Success!'
        case 'error':
          return 'Error!'
        case 'warning':
          return 'Warning!'
        case 'info':
          return 'Info!'
        default:
          return 'Alert!'
      }
    })()

    const defaultText = (() => {
      switch (type) {
        case 'success':
          return 'Transaction successful'
        case 'error':
          return 'Something went wrong'
        case 'warning':
          return 'Something went wrong'
        case 'info':
          return 'Are you sure you want to continue'
        default:
          return 'Do you want to continue'
      }
    })()

    return Swal.fire({
      title: title || defaultTitle,
      text: text || defaultText,
      icon: type,
      confirmButtonText: 'Ok',
    })
  }

  function confirm (options = {}) {
    return new Promise(resolve => {
      Swal.fire({
        icon: 'question',
        title: options.title || 'Are you sure you want to continue?',
        showCancelButton: true,
        confirmButtonText: options.confirmButtonText || 'Yes',
      }).then(result => {
        resolve(result.isConfirmed)
      })
    })
  }

  return {
    alert,
    confirm,
  }
}