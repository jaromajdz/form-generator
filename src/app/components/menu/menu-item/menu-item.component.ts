import { Component, Input, inject } from '@angular/core';
import { L10N_LOCALE } from 'angular-l10n';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  
  locale = inject(L10N_LOCALE);
  
  
  @Input()url?: string
  @Input()label!: string


}
