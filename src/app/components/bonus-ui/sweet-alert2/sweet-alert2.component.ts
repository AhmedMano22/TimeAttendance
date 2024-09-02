import { Component, OnInit } from '@angular/core';
declare var require: any
const Swal = require('sweetalert2')
@Component({
  selector: 'app-sweet-alert2',
  templateUrl: './sweet-alert2.component.html',
  styleUrls: ['./sweet-alert2.component.scss']
})
export class SweetAlert2Component implements OnInit {

  // Basic Alert
  basicAlert() {
    Swal.fire('Hello world!')
  }

  // Alert Title
  withTitle() {
    Swal.fire({
      
    title: "Here's the title!",
    text:  "...and here's the text!",
    }
    )
  }

  // Info
  info() {
    Swal.fire({
      type: 'info',
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Alert Title
  successAlert() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'info'
    )
  }

  withCancelled() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this imaginary file! ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result:any) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  // warning
  warning() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login:any) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result:any) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

  // A warning
  warning2() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'warning'
    )
  }

  // A warning
  success() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'success'
    )
  }

  // Info
  info2() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'info'
    )
  }

  // Danger
  danger() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'error'
    )
  }

  dialogWithThree(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


  customAnimation(){
    let timerInterval: any
  Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
  }).then((result: any) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    
  }
  })
  }

  dialog(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnInit(): void {
  }

}
