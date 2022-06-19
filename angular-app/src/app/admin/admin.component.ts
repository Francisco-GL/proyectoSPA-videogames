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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  resultado !: string;

  nombre: string = "";
  mail: string = "";
  cuenta: string = "";
  contra: string = "";
  tipoUsuario: string = "";

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    cuenta: new FormControl('', [Validators.required]),
    contra: new FormControl('', [Validators.required]),
    contra2: new FormControl('', [Validators.required]),
    tipoUsuario: new FormControl('', [Validators.required])
  })

  formularioEliminar = new FormGroup({
    cuenta: new FormControl('', Validators.required)
  })

  database = getDatabase();


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
      tipoUsuario: value.tipoUsuario
    });
    alert('Producto Registrado!');
  }


  eliminar(value: any){
    //remove data
    remove(ref(this.database, 'usuarios/' + value.cuenta));
    alert("Usuario: " + value.cuenta + ", eliminado correctamente!");
  }

  consultar(value: any){
    // read data
    const starCountRef = ref(this.database, 'usuarios/' + value.cuenta);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.nombre = data.nombre;
      this.mail = data.mail;
      this.cuenta = data.cuenta;
      this.contra = data.contra;
      this.tipoUsuario = data.tipoUsuario;
    });
  }

  buscar(value: any){
    // read data
    const starCountRef = ref(this.database, 'usuarios/' + value.cuenta);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.nombre = data.nombre;
      this.mail = data.mail;
      this.cuenta = data.cuenta;
      this.contra = data.contra;
      this.tipoUsuario = data.tipoUsuario;
    });
  }

  modificar(value: any){
    // update data
    alert("holaaaaa");
    // update(ref(this.database, 'usuarios/' + value.cuenta), {
    //   // username: value.username,
    //   nombre: value.nombre,
    //   mail: value.mail,
    //   cuenta: value.cuenta,
    //   contra: value.contra,
    //   contra2: value.contra2,
    //   tipoUsuario: value.tipoUsuario
    // });
    set(ref(this.database, 'usuarios/' + value.cuenta), {
      nombre: value.nombre,
      mail: value.mail,
      cuenta: value.cuenta,
      contra: value.contra,
      contra2: value.contra2,
      tipoUsuario: value.tipoUsuario
    });
    window.location.reload();
  }


}
