import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './components/login/login.service';

@Injectable()
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  //Cargar personas
  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://listado-personas-67f78-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' +
        token
    );
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listado-personas-67f78-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' +
          token,
        personas
      )
      .subscribe(
        (response) => {
          console.log('resultado de guardar las personas! ' + response);
        },
        (error) => console.log('error al guardar personas ' + error)
      );
  }

  // Modificar Persona
  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-67f78-default-rtdb.europe-west1.firebasedatabase.app/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('resultado modificar persona: ' + response),
      (error) => console.log('error al modificar persona: ' + error)
    );
  }

  //Eliminar persona
  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-67f78-default-rtdb.europe-west1.firebasedatabase.app/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('resultado eliminar persona: ' + response),
      (error) => console.log('error al eliminar persona: ' + error)
    );
  }
}
