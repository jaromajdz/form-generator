import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './page/page/page.module';
import { ComponentsModule } from './components/components/components.module';
import { L10nIntlModule, L10nTranslatePipe, L10nTranslationModule } from 'angular-l10n';
import { TranslationLoader, l10nConfig } from './l10n.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    L10nTranslationModule.forRoot(
      l10nConfig,
      {
        translationLoader: TranslationLoader
      }
    ),
    L10nIntlModule,
    L10nTranslatePipe,
    PageModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
