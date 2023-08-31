import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent {

  registrationForm =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

}
