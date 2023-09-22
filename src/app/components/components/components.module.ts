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
import { MobileMenuGeneratorComponent } from '../menu/mobile-menu/mobile-menu-generator/mobile-menu.component';
import { MobileMenuButtonComponent } from '../menu/mobile-menu/mobile-menu-button/mobile-menu-button.component';
import { MobileMenuComponent } from '../menu/mobile-menu/mobile-menu.component';
import { MobileSubmenuComponent } from '../menu/mobile-menu/mobile-submenu/mobile-submenu.component';
import { MenuService } from '../menu/menu.service';
import { BackdropComponent } from '../backdrop/backdrop.component';
import { MessageboxComponent } from '../messagebox/messagebox.component';
import { L10nTranslatePipe, L10nTranslationModule } from 'angular-l10n';


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
    MobileMenuGeneratorComponent,
    MobileMenuButtonComponent,
    MobileMenuComponent,
    MobileSubmenuComponent,
    BackdropComponent,
    MessageboxComponent
    
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    L10nTranslatePipe
  ],
  providers: [MenuService],
  exports: [
    NavbarComponent,
    MenuComponent,
    DropdownComponent,
    MenuItemComponent,
    MenuGeneratorComponent,
    LoginComponent,
    LoginReactiveComponent,
    CardComponent,
    MobileMenuGeneratorComponent,
    MobileMenuButtonComponent,
    MobileMenuComponent,
    MobileSubmenuComponent
  ]
})
export class ComponentsModule { }
