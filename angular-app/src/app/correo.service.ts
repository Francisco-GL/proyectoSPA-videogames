import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(public httpClient: HttpClient) {}

  rootURL = 'http://localhost:3000/contacto';

  sendEmail(params:any) {
    return this.httpClient.post(this.rootURL,params);
  }
}
