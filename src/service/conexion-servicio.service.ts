import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json' })
};

@Injectable()
export class ConexionServicioService {

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost/rest_api/api/users');
  }

  postUsers(data) {
    console.log(data);
    return this.http.post('http://localhost/rest_api/api/guardado/', data);
  }
}
