import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/compat/database';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  remove,
  getDatabase,
} from '@angular/fire/database';

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

  registrar(value: any){
    //create data
    alert(value.nombre);
    var database = getDatabase();
    set(ref(database, 'usuarios/' + value.cuenta), {
      nombre: value.nombre,
      mail: value.mail,
      cuenta: value.cuenta,
      contra: value.contra,
      contra2: value.contra2,
      tipoUsuario: "registrada"
    });
    alert('Producto Registrado!');

  }

}
