import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CorreoService } from '../correo.service';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private correo: CorreoService) { }

  message: string = '';
  cuenta: any;

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
  //   this.email.getData('fracoxd2').subscribe((res: any) => {
  //     console.log(res);
  //     this.cuenta = res['contacts'];
  //     this.data.type = NgxQrcodeElementTypes.CANVAS;
  //     this.data.value = JSON.stringify(this.cuenta);
  //     this.data.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  //   });
    this.correo.getData('fracoxd').subscribe((res:any) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
}
