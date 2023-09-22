import { Injectable } from "@angular/core";
import { L10nConfig, L10nProvider, L10nTranslationLoader } from "angular-l10n";
import { Observable, from } from "rxjs";

export const l10nConfig: L10nConfig = {
    format: 'language-region',
    providers: [
      { name: 'app', asset: 'app' }
    ],
    cache: true,
    keySeparator: '.',
    defaultLocale: { language: 'pl-PL', currency: 'PLN', timeZone: 'Europe/Warsaw' },
    schema: [
      { locale: { language: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' } },
      { locale: { language: 'pl-PL', currency: 'PLN', timeZone: 'Europe/Warsaw' } }
    ]
  };
  
  @Injectable() export class TranslationLoader implements L10nTranslationLoader {
    public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
      const data = import(`../i18n/${language}/${provider.asset}.json`);
      return from(data);
    }
  }