import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(public httpClient: HttpClient) {}

  rootURL = '/contacto';

  sendEmail(params:any) {
    return this.httpClient.post(this.rootURL,params);
  }
  ruta = '/configuracion/';
  getData(cuenta:any){
    return this.httpClient.get(this.ruta+cuenta);
  }
}
