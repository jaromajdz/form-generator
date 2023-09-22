import { Component, inject } from '@angular/core';
import { L10N_LOCALE } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-generator';

  locale = inject(L10N_LOCALE);
}