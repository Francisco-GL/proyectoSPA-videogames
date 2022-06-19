import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  resultado !: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    cuenta: new FormControl('', [Validators.required]),
    contra: new FormControl('', [Validators.required]),
    contra2: new FormControl('', [Validators.required])
  })


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  registrar(){
    //
  }

}
