import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos : Proyecto[] = [];

  constructor(private sProyectos: ProyectoService, private tokenService: TokenService){

  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }

  
  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(
      data => {this.proyectos = data}
    )
  }

  delete(id?: number){
    console.log("Borrando proyecto con id = " + id)
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }
}
