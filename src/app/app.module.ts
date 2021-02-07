import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaContactosComponent } from './agenda-contactos/agenda-contactos.component';
import {HttpClientModule} from '@angular/common/http';
import { ConexionServicioService } from '../service/conexion-servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    AgendaContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConexionServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
