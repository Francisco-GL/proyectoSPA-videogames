import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validation:any;
  cuenta1:string = "persona1";
  cuenta2:string = "persona2";
  pass1:string = "1234";
  pass2:string = "5678";
  
  constructor() { }

  validar(cuenta:string, pass:any) {
    if(cuenta === this.cuenta1 && pass === this.pass1 || cuenta === this.cuenta2 && pass === this.pass2){
      this.validation = '/home';
      if(localStorage.getItem('user') === null)
        localStorage.setItem('user', cuenta);
      else
        localStorage.setItem('user', cuenta);
      return true;
    }else{
      this.validation = '/login';
      return false;
    }
  }

  ngOnInit(): void {}

}