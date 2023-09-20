import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-mobile-submenu',
  templateUrl: './mobile-submenu.component.html',
  styleUrls: ['./mobile-submenu.component.scss'],
  animations: [
    trigger('submenuInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50%)' }),
        animate('200ms', style({ opacity: 1 , transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0px)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateY(-50%)' }))
      ])
    ])
]
})
export class MobileSubmenuComponent {
 

  @Input()depth = 0

  @Input()label!: string
  show = false

  private _sub!: Subscription

  private _menuReset: MenuService

  constructor(menuReset: MenuService)
  {
    this._menuReset = menuReset
  }


  ngOnInit(){
    this._sub = this._menuReset.getMenuReset().pipe(
      tap((nr: number)=>{
        if(this.depth>nr){
          this.show = false
        }
      })
    ).subscribe()
  }

  submenuClickHandler(){
    this.show = !this.show
    if(!this.show) this._menuReset.sendReset(this.depth)
  }

}
