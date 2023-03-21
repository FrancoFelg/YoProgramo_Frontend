import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  persona: persona = new persona("","","","","");/* Inicializacion*/ 

  constructor(public personaService: PersonaService, public tokenService: TokenService){
    this.personaService.details().subscribe(data => {this.persona = data})/* Lo que esté en la persona traída se guarda en data */

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  isLogged = false;

  ngInit(): void{
    
  }

  cargarPersona(){
    this.personaService.details().subscribe(data => {this.persona = data})
  }

}
