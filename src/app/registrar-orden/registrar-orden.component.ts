import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-registrar-orden',
  templateUrl: './registrar-orden.component.html',
  styleUrls: ['./registrar-orden.component.css']
})
export class RegistrarOrdenComponent implements OnInit {

  order: FormGroup;
  submitted = false;
  titulo = 'Crear un Formulario con Angular 7 y Bootstrap 4 + Validación';
  loading: false;

  constructor(private formBuilder: FormBuilder, private service: RestApiService) { }

  ngOnInit() {
    this.order = this.formBuilder.group({
      nya: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      producto: ['', Validators.required],
      pais: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.order.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.order.invalid) {
      return;
    }

    

    var body = {
      "fechaEntrega": {
        "S": this.order.value.fechaEntrega
      },
      "fechaSalida": {
        "S": this.order.value.fechaSalida
      },
      "cliente": {
        "S": this.order.value.nya
      },
      "producto": {
        "S": this.order.value.producto
      }
    }

    console.log(body);


    this.service.enviarOrden(body).subscribe(resp => {
      console.log(resp);
    })

  }

}
