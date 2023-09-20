import { Component } from '@angular/core';
import { formFieldControlTypeEnum, formFieldT, formGroupT } from 'src/app/types/app.types';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formBuilder: any

  constructor(formBuilder: FormBuilder){}

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

  generateForm(formConfig: formGroupT[]){
    let form = {}
    for(let el of formConfig){
        form = {...form, [el.groupName]: this.formBuilder.group({}) }
     }
     
    
    }


}
