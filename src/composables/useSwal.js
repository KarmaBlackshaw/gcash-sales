import Swal from 'sweetalert2'

export default () => {
  function alert () {
    //
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