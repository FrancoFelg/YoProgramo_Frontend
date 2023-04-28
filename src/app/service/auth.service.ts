import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "https://portfolio-backend3-zl0m.onrender.com/auth/";//http://localhost:8080/

  constructor(private httpClient:HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + "nuevo", nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    console.log(`Se ha iniciado: Login con la ruta ${this.authURL}login y los datos ${JSON.stringify(loginUsuario)}`)
    return this.httpClient.post<JwtDto>(this.authURL + "login", loginUsuario);
    
  }
}
