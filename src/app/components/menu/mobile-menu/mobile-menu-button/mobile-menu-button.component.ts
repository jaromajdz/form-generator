import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-button',
  templateUrl: './mobile-menu-button.component.html',
  styleUrls: ['./mobile-menu-button.component.scss']
})
export class MobileMenuButtonComponent {
  @Input()show!: boolean
}
