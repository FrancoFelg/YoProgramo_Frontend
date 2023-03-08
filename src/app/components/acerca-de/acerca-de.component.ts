import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  persona: persona = new persona("","","");/* Inicializacion*/ 

  constructor(public personaService: PersonaService){
    this.personaService.getPersona().subscribe(data => {this.persona = data})/* Lo que esté en la persona traída se guarda en data */
  }

  ngInit(): void{}

}
