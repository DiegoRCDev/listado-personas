import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';
import { DataService } from './data.service';
import { LoginService } from './components/login/login.service';
import { LoginGuardian } from './components/login/login-guardian.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    // Provisión de servicios globales
    LoggingService,
    PersonasService,
    DataService,
    LoginService,
    LoginGuardian,
  ],
};
