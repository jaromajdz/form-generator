import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { menuConfig } from './menu.config';
import { UserAuthService } from 'src/app/auth/userauth.service';
import { Subscription, tap } from 'rxjs';
import { IMenuConfig } from 'src/app/types/app.types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

menuConfig!: IMenuConfig[] 
private _sub!: Subscription

constructor(private _auth: UserAuthService){}

ngOnInit(){
  this._sub = this._auth.isLoggedIn().pipe(
    tap((isLogged: boolean)=>{
      this.menuConfig = [...this.cutMenu(menuConfig, isLogged)]
    })
  ).subscribe()
}

cutMenu(menuConfig: IMenuConfig[], loogged: boolean, menu: IMenuConfig[] = [] ){
  for(const item of menuConfig){
    
    if(item.showLoggedUser){
      if(loogged){
        if(item.showLoggedUser==="yes" || item.showLoggedUser==="always"){
          
          if(item.menu){
            let oneMenu = this.cutMenu(item.menu, loogged, [])
            menu.push({ ...item, menu: [...oneMenu]})
           }else{
              menu.push(item)
          }    
        }

      }else if( item.showLoggedUser==="none" || item.showLoggedUser==="always" ){
        if(item.menu){
          let oneMenu = this.cutMenu(item.menu, loogged, [])
          menu.push({ ...item, menu: [...oneMenu]})
         }else{
            menu.push(item)
        }
      }
      

    }else{
      
      if(item.menu){
        let oneMenu = this.cutMenu(item.menu, loogged, [])
          menu.push({ ...item, menu: [...oneMenu]})
       }else{
          menu.push(item)
      }
    }
    
  }
  return menu
}

ngOnDestroy(){
  this._sub.unsubscribe()
}

}
