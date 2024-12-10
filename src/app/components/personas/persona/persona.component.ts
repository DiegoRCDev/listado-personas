import { Component, Input } from '@angular/core';
import { Persona } from '../../../persona.model';
import { PersonasService } from '../../../personas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent {
  @Input() persona!: Persona;
  @Input() indice!: number;

  constructor(private personasService: PersonasService) {}

  emitirSaludo() {
    this.personasService.saludar.emit(this.indice);
  }
}
