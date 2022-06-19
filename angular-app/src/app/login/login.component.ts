import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public authService: AuthService) { }
  
  database = getDatabase();

  mail: string = "";

  ngOnInit(): void {}

  buscar(cuenta: any){
    //read data
    const starCountRef = ref(this.database, 'usuarios/' + cuenta);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.mail = data.mail;
      this.authService.SignIn(this.mail, data.contra);
    });

  }

}