import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  order: FormGroup;
  submitted = false;
  titulo = 'Crear un Formulario con Angular 7 y Bootstrap 4 + Validación';
  loading : false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.order = this.formBuilder.group({
      nya: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      postre: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.order.controls; }

  onSubmit() {
    this.submitted = true;
 
        if (this.order.invalid) {
            return;
        }

        console.log(this.order.value.email);
        
 
        alert('Mensaje Enviado !')

  }

}


