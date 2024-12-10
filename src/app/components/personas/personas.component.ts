import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../loggingService.service';
import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [RouterOutlet, PersonaComponent, FormularioComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas);
    });*/

    /*this.personasService.obtenerPersonas().subscribe(
      (personas: Persona[] | any) => {
        // Verifica si `personas` es un array
        if (Array.isArray(personas)) {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        } else {
          console.error('La respuesta no es un array de personas');
        }
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );*/

    this.personasService.obtenerPersonas().subscribe(
      (personas: any) => {
        console.log('Respuesta obtenida:', personas); // Agrega esta línea para inspeccionar
        if (Array.isArray(personas)) {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        } else {
          console.error('La respuesta no es un array de personas');
        }
      },
      (error) => {
        console.error('Error al obtener personas:', error);
      }
    );
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
