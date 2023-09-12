import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { DropdownComponent } from '../menu/dropdown/dropdown.component';
import { MenuItemComponent } from '../menu/menu-item/menu-item.component';
import { MenuGeneratorComponent } from '../menu/menu-generator/menu-generator.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 
import { LoginReactiveComponent } from '../login-reactive/login-reactive.component';
import { CardComponent } from '../card/card.component';
import { FormComponent } from '../forms/form/form.component';
import { SingleFormComponent } from '../forms/form/single-form/single-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    MenuGeneratorComponent,
    LoginComponent,
    LoginReactiveComponent,
    CardComponent,
    FormComponent,
    SingleFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    MenuGeneratorComponent,
    LoginComponent,
    LoginReactiveComponent,
    CardComponent
    
  ]
})
export class ComponentsModule { }
