import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {}

  login() {
    console.log(this.usuario);
    const {email, password } = this.usuario;
    this.authService.login(email,password).then(res => {
      console.log("Se logeo: " + res);
    });
  }

  loginGoogle() {
    console.log(this.usuario);
    const {email, password } = this.usuario;
    this.authService.loginGoogle().then(res => {
      console.log("Se logeo con google: " + res);
    });
  }

  logOut() {
    this.authService.logOut();
  }
}
