import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   mostrar_orden : boolean = true;
   mostrar_transporte : boolean = false;

  constructor() { }

  ngOnInit() {

  }

  ordenar(){
    this.mostrar_orden = true;
    this.mostrar_transporte= false;
  }

  transporte(){
    this.mostrar_orden = false;
    this.mostrar_transporte = true;
  }

}


