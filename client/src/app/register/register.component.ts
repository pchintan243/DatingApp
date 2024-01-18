import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() userFromHomeComponent: any;

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  register() {
    console.log(this.model);
  }

  // It's close the register form
  cancel() {
    this.cancelRegister.emit(false);
  }
}
