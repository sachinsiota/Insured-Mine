import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  password: FormGroup;
  showPassword: boolean = false;

   constructor(
   ) { }

   ngOnInit() {
     this.password = new FormGroup({
      'password': new FormControl(null, [Validators.required])
     });
        this.formReady.emit(this.password);
   }
}
