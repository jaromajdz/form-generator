import { Component, Input } from '@angular/core';
import { IMenuConfig, menuConfigT } from 'src/app/types/app.types';

@Component({
  selector: 'app-mobile-menu-generator',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuGeneratorComponent {

  @Input()config!: IMenuConfig[] | undefined
  @Input()depth = 0
  @Input()show = true
}
