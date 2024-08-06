import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot(routes),
      MatToolbarModule,
      MatCardModule
    )
  ]
};
