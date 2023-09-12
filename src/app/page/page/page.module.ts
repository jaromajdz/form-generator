import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ComponentsModule } from 'src/app/components/components/components.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PageModule { }
