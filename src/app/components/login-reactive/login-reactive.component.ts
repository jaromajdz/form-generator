import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
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
  isLogin = true
  formTitle = "Login"

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

  constructor(private _authService: UserAuthService, private _router: Router) {}

  ngOnInit() {

    if(this._router.url === "/registration")
      {
        this.formTitle = "Registration" 
        this.isLogin = false
      } 

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

     const whereToSend =  this.isLogin? "signIn" : "signUp" 

     this._authService
        [whereToSend](
          this.registrationForm.value.email || '',
          this.registrationForm.value.password || ''
        )
        .subscribe(res=>{
          this.showMessage = true
          this.message = `You have ${this.isLogin? "logged in" : "registered"} successfully!`
          console.log(res)
        },
          (error: HttpErrorResponse)=>{
            console.log(error.error.error.message)
            this.message = "Email or password problem"
            this.showMessage = true
            });
    }
}
