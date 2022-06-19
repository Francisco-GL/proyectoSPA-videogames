import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CorreoService } from '../correo.service';
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
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private email: CorreoService) { }

  message: string = '';
  account:any;

  data: any = {
    type: '',
    value: '',
    correctionLevel: ''
  }

  generate() {
    this.message = "QR-Code generated";
    // let random = Math.floor(Math.random() * (this.members.length - 0)) + 0;
    this.data.type = NgxQrcodeElementTypes.CANVAS;
    // this.data.value = JSON.stringify(this.members[random]);
    this.data.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  }

  obtenerData(): void {
    this.email.getData('fracoxd2').subscribe((res: any) => {
      console.log(res);
      this.account = res['contacts'];
      this.data.type = NgxQrcodeElementTypes.CANVAS;
      this.data.value = JSON.stringify(this.account);
      this.data.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    });
  }

  nombre: string = "";
  mail: string = "";
  cuenta: string = "";
  contra: string = "";
  tipoUsuario: string = "";

  consultar(value: any){
    // read data
    var database = getDatabase();
    const starCountRef = ref(database, 'usuarios/' + value.cuenta);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.nombre = data.nombre;
      this.mail = data.mail;
      this.cuenta = data.cuenta;
      this.contra = data.contra;
      this.tipoUsuario = data.tipoUsuario;
    });
  }

  ngOnInit(): void {
  }
}
