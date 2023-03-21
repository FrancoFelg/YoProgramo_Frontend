import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{

  nombre: string;
  descripcion: string;

  constructor(private sProyectos: ProyectoService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const skill = new Proyecto(this.nombre, this.descripcion);
    this.sProyectos.save(skill).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate([""]);
      }, err => {
        alert("Fallo al añadir el proyecto");
        this.router.navigate([""]);
      }
    );
  }
}
