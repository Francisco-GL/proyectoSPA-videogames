import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../correo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private correo: CorreoService) { 
    //AQUI VAN LAS COSAS DEL FORMGROUP
    /*
    aunto
    mensaje
    */
  }

  enviar() {
    // let data = {
    //   emai:'TU CORREO AQUI si no el mio pacoo12306@gmail.com',
    //   asunto:this.datos.value.asunto,
    //   mensaje:this.datos.value.mensaje
    // };

    // this.correo.sendEmail(data).subscribe((res:any) =>{
    //   console.log(res);
    // })
  }

  ngOnInit(): void {
  }

}
