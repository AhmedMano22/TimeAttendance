import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../shared/data/contact/contact'
import { PrintModalComponent } from '../print-modal/print-modal.component';
declare var require: any
const Swal = require('sweetalert2')
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public history: boolean = false;
  public editContact: boolean = false;
  public contacts = data.contactData.contact
  public open: boolean = false


  public days = ["01", "02", "03","04"]
  public months = ["January", "February", "March","April", "May", "June", "July", "August", "September","October", "November", "December"]

  constructor(private modalService: NgbModal) { }


  showHistory() {
    this.history = !this.history;
  }
  ngOnInit(): void {
  }
  deleteContact(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "This contact will be deleted from your Personal Contacts and from the chat list too. ",
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


  openPrint(){
    const modalRef = this.modalService.open(PrintModalComponent, { size: 'lg' });
  }
  openHistory(){
    this.open = !this.open
  }

}
