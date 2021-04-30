import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {

  ruta: FormGroup;
  submitted = false;
  titulo = 'Calcular ruta';
  loading: false;
  ruta_calculada = "";
  distancia ="";
  tiempo ="";

  constructor(private formBuilder: FormBuilder, private service: RestApiService) { }


  ngOnInit(): void {

    this.ruta = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      transporte: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.ruta.controls; }

  onSubmit(){
 
    let body = {
      "origen" : this.ruta.value.origen,
      "destino" : this.ruta.value.destino,
      "transporte" : this.ruta.value.transporte
    }

    console.log(this.ruta.value);

    this.service.obtenerTransporte(body).subscribe(resp =>{
      console.log(resp["Distancia (Km)"]);
      console.log(resp["Tiempo (Min)"]);

      this.distancia = resp["Distancia (Km)"];
      this.tiempo = resp["Tiempo (Min)"];

      this.ruta_calculada = `La ruta mas optima calculada es ${this.distancia} km y ${this.tiempo} minutos`
      
    }, (error)=>{
      console.log(error.status);
      
    })
    
  }

}
