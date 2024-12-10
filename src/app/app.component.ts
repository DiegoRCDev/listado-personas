import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  /*providers: [
    LoggingService,
    PersonasService,
    DataService,
    LoginService,
    LoginGuardian,
  ],*/
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7kPA8xifZoI7PE4x_suNcsE3bGpgw46Q',
      authDomain: 'listado-personas-67f78.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logOut();
  }
}
