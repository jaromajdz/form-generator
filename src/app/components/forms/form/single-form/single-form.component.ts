import { Component, Input } from '@angular/core';
import { formFieldControlTypeEnum, formFieldT } from 'src/app/types/app.types';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent {

  @Input()fieldConfig!: formFieldT

  fieldsTypes = formFieldControlTypeEnum
}
