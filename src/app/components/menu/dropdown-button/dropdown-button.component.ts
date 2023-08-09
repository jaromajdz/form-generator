import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss']
})
export class DropdownButtonComponent {

  hovered = false

  @Input()label!: string

mouseEnterHandler(){
  this.hovered = true
}

mouseLeaveHandler(){
  this.hovered = false
}

}
