import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/Custom-Validators/custom.validators';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  email: FormGroup;

  constructor(private customValidators: CustomValidators) { }

  ngOnInit() {
    this.email = new FormGroup({
      'email': new FormControl(null, [Validators.required])
    });
    this.formReady.emit(this.email);
  }
}
