import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model = {
    login: '',
    password: ''
  }

  reset(){
    this.model.login = ''
    this.model.password = ''
  }

}
