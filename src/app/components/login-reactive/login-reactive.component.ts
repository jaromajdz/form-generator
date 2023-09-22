import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { UserAuthService } from 'src/app/auth/userauth.service';

interface errorMessagesT {
  [key: string]: { [key: string]: string };
}

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss'],
})
export class LoginReactiveComponent implements OnInit {

  message!: string
  showMessage = false

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  errorMessages: errorMessagesT = {
    email: {
      required: 'E-mail is required, please eneter',
      email: 'Entered email is not valid',
    },
    password: {
      required: 'Please enter the password',
      minlength: 'The password should containd 8 characters at least',
    },
  };

  formErrors: { [key: string]: string } = {};

  constructor(private _authService: UserAuthService) {}

  ngOnInit() {

    this.registrationForm.valueChanges
      .pipe(
        tap((form) => {
          Object.keys(this.registrationForm.controls).forEach((key) => {
            const controlErrors = this.registrationForm.get(key)?.errors;

            if (controlErrors && this.registrationForm.get(key)?.dirty) {
              this.formErrors[key] = Object.keys(controlErrors)
                .map((errKey) => this.errorMessages[key][errKey])
                .join(',');
            } else {
              this.formErrors[key] = '';
            }
          });
        })
      )
      .subscribe();
  }

  sendHandler() {
    if (this.registrationForm.invalid) return;
    this._authService
      .singnUp(
        this.registrationForm.value.email || '',
        this.registrationForm.value.password || ''
      )
      .subscribe(res=>{
        this.showMessage = true
        this.message = "You have registered successfully!"
        console.log(res)
      },
        (error: HttpErrorResponse)=>{
          console.log(error.error.error.message)
          this.message = "Email problem"
          this.showMessage = true
          });
  }
}
