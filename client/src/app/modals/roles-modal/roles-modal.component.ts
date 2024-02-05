import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent {

  constructor(public bsModalRef: BsModalRef) { }

  title = '';
  list: any;
  closeBtnName = '';

}
