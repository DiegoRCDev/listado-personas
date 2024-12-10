import { Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { FormularioComponent } from './components/personas/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardian } from './components/login/login-guardian.service';

export const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate: [LoginGuardian] },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [LoginGuardian],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];
