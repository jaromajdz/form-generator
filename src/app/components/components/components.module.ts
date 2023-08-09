import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { DropdownComponent } from '../menu/dropdown/dropdown.component';
import { MenuItemComponent } from '../menu/menu-item/menu-item.component';
import { DropdownButtonComponent } from '../menu/dropdown-button/dropdown-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    DropdownButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    DropdownButtonComponent
  ]
})
export class ComponentsModule { }
