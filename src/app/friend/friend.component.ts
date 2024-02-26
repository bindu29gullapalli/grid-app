import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AgGridAngular } from 'ag-grid-angular';

import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule,FormsModule,FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
closeResult: string;
  constructor(
  private modalService: NgbModal, 
  private http: HttpClient) { }

  ngOnInit() {
  }
  
  open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

onSubmit(f: NgForm) {
	console.log(f.value);
  const url = 'http://localhost:4401/friends';
  
  this.http.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
}

openDetails(targetModal, friend: FriendComponent) {
   this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
   document.getElementById('fname').setAttribute('value', 'test');
   document.getElementById('lname').setAttribute('value', 'Name');
   document.getElementById('dept').setAttribute('value', 'CSE');
   document.getElementById('email2').setAttribute('value', 'test@gmail.com');
   document.getElementById('cntry').setAttribute('value', 'USA');
}

openEdit(targetModal, friend: FriendComponent) {
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
  document.getElementById('fname').setAttribute('value', 'test');
   document.getElementById('lname').setAttribute('value', 'Name');
   document.getElementById('dept').setAttribute('value', 'CSE');
   document.getElementById('email2').setAttribute('value', 'test@gmail.com');
   document.getElementById('cntry').setAttribute('value', 'USA');
}


openDelete(targetModal, friend: FriendComponent) {
  //deleteId = friend.id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}


}
