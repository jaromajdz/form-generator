import { Component } from '@angular/core';
import { menuConfig } from 'src/app/components/menu/menu.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuConfig = menuConfig
}
