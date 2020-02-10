import { Injectable } from "@angular/core";
import { FormControl, Validators, AbstractControl, } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {

  constructor() {

  }

  // Custom Validator for email
  emailValidator(control: FormControl): { [key: string]: boolean } | null {
    var emailPhone = control.value;
    //This is for email
    if (!Validators.email(control)) {
      return null;
    }
    else {
      return { 'emailPhone': false };
    }
  }
}