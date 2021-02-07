import { Component } from '@angular/core';
import {ConexionServicioService} from '../service/conexion-servicio.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  objectOlais: any = {};
 
  nombre: any;
  apellido_paterno: any;
  apellido_materno: any;
  correo: any;
  calle: any;
  numero_interior: any;
  colonia: any;
  codigo_postal: any;
  telefono: any;

  todos: any;
  constructor(public conexionServicio: ConexionServicioService, private formBuilder: FormBuilder) { 
    this.conexionServicio.getUsers().subscribe((data) => {
      console.log(data);
      this.todos = data;
      console.log(this.todos);
    });
  }

  agendaValidation = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00C0-\u00FF]+([ ]?[a-zA-Z_&\u00C0-\u00FF])*$")]],
    ape_paterno: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00C0-\u00FF]+([ ]?[a-zA-Z_&\u00C0-\u00FF])*$")]],
    ape_materno: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00C0-\u00FF]+([ ]?[a-zA-Z_&\u00C0-\u00FF])*$")]],
    email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    street: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00C0-\u00FF]+([ ]?[a-zA-Z_&\u00C0-\u00FF])*$")]],
    number: ['', [Validators.required,
    Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")]],
    residencial: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00C0-\u00FF]+([ ]?[a-zA-Z_&\u00C0-\u00FF])*$")]],
    code_postal: ['', Validators.required],
    tel: ['', [Validators.required,
    Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")]]
  })
  

  

  guardado() {
    this.objectOlais.nombre = this.nombre;
    this.objectOlais.apellido_paterno = this.apellido_paterno;
    this.objectOlais.apellido_materno = this.apellido_materno;
    this.objectOlais.correo_electronico = this.correo;
    this.objectOlais.calle = this.calle;
    this.objectOlais.numero_interior = this.numero_interior;
    this.objectOlais.colonia = this.colonia;
    this.objectOlais.codigo_postal = this.codigo_postal;
    this.objectOlais.telefono = this.telefono;
    console.log(this.objectOlais);

    this.conexionServicio.postUsers(this.objectOlais).subscribe(() => {

    });

    this.nombre = null;
    this.apellido_paterno = null;
    this.apellido_materno = null;
    this.correo = null;
    this.calle = null;
    this.numero_interior = null;
    this.colonia = null;
    this.codigo_postal = null;
    this.telefono = null;
    this.objectOlais = {};
  }

  recargar() {
    
        this.conexionServicio.getUsers().subscribe((data) => {
          this.todos = data;
        });
      }
}
