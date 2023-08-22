import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations:[
    trigger('showDropdown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-40px)' }),
        animate('200ms', style({ opacity: 1 , transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateY(-40px)' }))
      ])
    ])
]
})
export class DropdownComponent {

  @ViewChild('dropdownButton')buttonRef!: ElementRef
  
  hovered = false

  @Input()label!: string

  @Input()depth = 0

  
  @Input()hoverColor?: string

  top!: string
  left!: string

  ngOnInit(){
    this.hoverColor = this.hoverColor || 'primary-contrast-50'
  }

  mouseEnterHandler(){
    //console.log(this.buttonRef.nativeElement. getBoundingClientRect())
    //console.log(window.innerWidth)
    this.top =  `${this.depth>0? 0 : this.buttonRef.nativeElement.offsetHeight}px`
    this.left= `${this.depth>0? this.buttonRef.nativeElement.offsetWidth : 0}px`  
    this.hovered = true
}


mouseLeaveHandler(){
  this.hovered = false
}

}
