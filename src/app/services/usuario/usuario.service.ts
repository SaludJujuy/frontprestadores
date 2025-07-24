import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlBase : string = "http://10.0.0.19:3000/api/";
  endpoint: String = "login";
  constructor(private _http:HttpClient) { }

  getUsers():Observable<any>{
    const httpOptions = {

    }

    return this._http.get(this.urlBase,httpOptions);
  }

  login(user: User):Observable<any>{
    //console.log(user);
    const email = user.email;
    const password = user.password;
    let userJson = JSON.stringify({email,password});
    const httpOption = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200/', // Especifica el origen permitido
          'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE', // Métodos permitidos
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }) 
    }
    console.log(userJson,typeof(userJson),userJson);
    return this._http.post(`${this.urlBase}${this.endpoint}`,userJson, httpOption)
  }

  logout(): Observable<any> {
    // Implement logout logic here if needed
    return of({ message: 'User logged out successfully' });
  }
}
