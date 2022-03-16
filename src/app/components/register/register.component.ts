import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {}

  register() {
    console.log(this.usuario);
    const {email, password } = this.usuario;
    this.authService.register(email,password).then(res => {
      console.log("Se registró: " + res);
    });
  }

}
