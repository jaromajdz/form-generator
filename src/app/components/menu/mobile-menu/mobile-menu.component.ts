import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { menuConfigT } from 'src/app/types/app.types';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('menuInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('200ms', style({ opacity: 1 , transform: 'translateX(0px)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0px)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
]
})
export class MobileMenuComponent {
@Input()config!: menuConfigT[]

show = false

showMenuHandler(){
  this.show =  !this.show
  console.log(this.show)
}  

}
