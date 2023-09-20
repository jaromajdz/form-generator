import { Component, Input } from '@angular/core';
import { menuConfigT } from 'src/app/types/app.types';

@Component({
  selector: 'app-mobile-menu-generator',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuGeneratorComponent {

  @Input()config!: menuConfigT[]
  @Input()depth = 0
  @Input()show = true
}
