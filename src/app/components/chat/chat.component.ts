import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user : any;
  nuevoMensaje:string = '';

  mensajeList: any[] = [
    {
      id: 'id',
      texto: 'hola'
    },
    {
      id: 'id',
      texto: 'ola'
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(userLogged => {
      this.user = userLogged;
    })
  }

  enviarMensaje() {
    if(this.nuevoMensaje != '') {

      let mensajeTmp = {
        id: this.user.uid,
        texto: this.nuevoMensaje
      };

      this.mensajeList.push(mensajeTmp);

      this.nuevoMensaje = '';
    }
  }

}
