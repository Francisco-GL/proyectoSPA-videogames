import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../correo.service';
import * as Notiflix from 'notiflix';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  datos!:FormGroup;

  constructor(private correo: CorreoService) { 
    this.datos = new FormGroup ({
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })
  }

  enviar() {
    Notiflix.Loading.standard('loading...');
    let data = {
      emai:'pacoo12306@gmail.com',
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje
    };

    this.correo.sendEmail(data).subscribe((res:any) =>{
      console.log(res);
      Notiflix.Loading.remove();
    });
  }

  ngOnInit(): void {
  }

}
