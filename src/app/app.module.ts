import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeEnGB from '@angular/common/locales/en-GB';
import localeES from '@angular/common/locales/es';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

// module shared
import { SharedModule } from './shared/shared.module';

// esta funcion la tenemos que llamar para que establezca todos los idiomas que queremos manejar en la app
registerLocaleData(localeES);
registerLocaleData(localeEnGB);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
