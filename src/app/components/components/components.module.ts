import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { DropdownComponent } from '../menu/dropdown/dropdown.component';
import { MenuItemComponent } from '../menu/menu-item/menu-item.component';
import { MenuGeneratorComponent } from '../menu/menu-generator/menu-generator.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    MenuGeneratorComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    MenuGeneratorComponent
    
  ]
})
export class ComponentsModule { }
