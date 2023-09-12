import { Component } from '@angular/core';
import { formFieldControlTypeEnum } from 'src/app/types/app.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  exampleFormConfig = [
    {
      groupName: "registration",
      title: "User registration",
      form: [
        {
        fieldName: "loginEmail",
        label: "Login or email",
        inputType: formFieldControlTypeEnum.input
        },
        {
          fieldName: "password",
          label: "Password",
          inputType: formFieldControlTypeEnum.password
        }      
      ]
    },
    {
      groupName: "details",
      title: "User details",
      form: [
        {
        fieldName: "firstName",
        label: "Firstname",
        inputType: formFieldControlTypeEnum.input
        },
        {
          fieldName: "lastName",
          label: "Surname",
          inputType: formFieldControlTypeEnum.input
        }      
      ]
    }
  ]

}
