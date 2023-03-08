import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles!: String[];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    console.log("Se ha iniciado: onLogin");
    this.loginUsuario =
    new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        console.log(`Se ha setteado el token ${data.token}`);
        this.tokenService.setUserName(data.nombreUsuario);
        console.log(`Se ha setteado el username ${data.nombreUsuario}`);
        this.tokenService.setAuthorities(data.authorities);
        console.log(`Se ha setteado el authorities ${JSON.stringify(data.authorities)} )}`);
        this.roles = data.authorities;
        this.router.navigate([""])
        console.log("Se ha terminado: onLogin");
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    )
  }

}
