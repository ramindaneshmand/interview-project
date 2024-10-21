import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app-routes.module';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideEntityData, withEffects} from '@ngrx/data';
import {provideEffects} from '@ngrx/effects';
import {provideRouterStore} from '@ngrx/router-store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {entityConfig} from './state/entity-metadata';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(), provideStore(), provideEntityData(entityConfig, withEffects()), provideEffects(), provideRouterStore(), provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode()
  }), provideHttpClient()]
};
