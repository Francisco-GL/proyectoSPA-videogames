import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userType:string=''; //variable donde recibirá la validacion de Login al checar en la BD
  fontSize = 18;
  template = '';
  
  info: any;
  config: Settings[] = [];
  objects: any = {
    cuenta: localStorage.getItem('tipo'),
    font: 'false',
    fontSize: '14',
    tema: 'white'
  }
  name = '';
  Op = '';

  constructor() {
    this.info = localStorage.getItem('configuracion');
    if (this.info === null) {
      localStorage.setItem('configuracion', JSON.stringify(this.config));
    }
    //this.validarUser();
  }

  validarUser () {
    this.userType = (localStorage.getItem('tipo') || "");
    this.name = (localStorage.getItem('cuenta') || "");
    if(this.userType === 'default'){
      this.Op = '';
    }else if(this.userType === 'user'){
      this.Op = 'Algo'
    }else if(this.userType === 'admin'){
      this.Op = 'Admin'
    }
  }

  guardarCambios(): void {
    this.config = JSON.parse(localStorage.getItem('configuracion') || '{}');
    this.config.push(this.objects);
    localStorage.setItem('configuracion', JSON.stringify(this.config));
  }

  changeFont(option: any) {
    let font = document.getElementsByTagName('body')[0].style;
    if (option === 'false') {
      font.fontFamily = 'Arial';
      this.objects.font = 'false';
    } else if (option === 'true') {
      font.fontFamily = 'Arial Black';
      document.getElementsByTagName('a')[0].style.fontFamily = 'Arial';
      this.objects.font = 'true';
    }
  }

  changeSizeFont(operator: any) {
    this.objects.fontSize = '18';
    if (operator === '+') {
      this.fontSize++;
    } else if (operator === '=') {
      this.fontSize = 18;
    } else if (operator === '-') {
      this.fontSize--;
    }
    this.objects.fontSize = this.fontSize;
    document.getElementsByTagName('body')[0].style.fontSize = `${this.fontSize}px`;
  }

  changeTemplateColor(option: any) {
    this.objects.tema = 'white';
    let letter = '';
    let colorFont = '';
    let colorFontNav = '';
    if (option === 'dark') {
      this.template = '#121212';
      letter = 'white';
      colorFontNav = colorFont = '#F1C40F';
      this.objects.tema = option;
    } else if (option === 'white') {
      this.template = 'white';
      colorFont = letter = 'black';
      colorFontNav = 'white';
      this.objects.tema = option;
    }
    document.getElementsByTagName('body')[0].style.backgroundColor =
      this.template;
    document.getElementsByTagName('body')[0].style.color = letter;
    document.getElementsByTagName('h2')[0].style.color =
      document.getElementsByTagName('h1')[0].style.color = colorFont;
    document.getElementsByTagName('a')[0].style.color = colorFontNav;
  }

  cerrarSesion(){
    localStorage.setItem('cuenta', "");
    localStorage.setItem('tipo', "");
    this.ngOnInit();
  }

  ngOnInit(): void { // MODIFICAR
    // let font, size, template, index;
    // let aux = [];
    // aux = JSON.parse(localStorage.getItem('configuracion') || '{}');

    // index = aux.findIndex((c: any) => c.cuenta === localStorage.getItem('user'))
    // font = aux[index].font;
    // this.changeFont(font);
    // size = aux[index].fontSize;
    // document.getElementsByTagName('body')[0].style.fontSize = `${size}px`;
    // template = aux[index].tema;
    // this.changeTemplateColor(template);
    // if (index === -1) {
    //   document.getElementsByTagName('a')[0].style.fontFamily = 'Arial';
    //   document.getElementsByTagName('body')[0].style.fontSize = `${this.fontSize}px`;
    //   document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    //   document.getElementsByTagName('body')[0].style.color = 'black';
    //   document.getElementsByTagName('a')[0].style.color = 'white';
    // }
    this.validarUser();
    document.getElementsByTagName('a')[0].style.fontFamily = 'Arial';
    document.getElementsByTagName('body')[0].style.fontSize = `${this.fontSize}px`;
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
    document.getElementsByTagName('a')[0].style.color = 'white';
    
  }
}

interface Settings {
  cuenta: string;
  font: string;
  fontSize: string;
  tema: string;
}

