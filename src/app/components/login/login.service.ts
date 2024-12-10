import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class LoginService {
  token!: string;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          currentUser.getIdToken().then((token) => {
            this.token = token;
            this.router.navigate(['/']);
          });
        } else {
          console.error('No user is currently signed in.');
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.router.navigate(['login']);
      })
      .catch((error) => console.log('Error logout ' + error));
  }
}
