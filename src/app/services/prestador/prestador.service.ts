import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {
  urlBase: string = "http://10.0.0.19:3000/api/prestador/";

  constructor(private _http: HttpClient) { }

  getPrestadores(): Observable<any> {
    const httpOptions = {

    }

    return this._http.get(this.urlBase, httpOptions);
  }

  getPrestador(param: any): Observable<any> {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200/', // Especifica el origen permitido
          'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE', // Métodos permitidos
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',

        })
      };
      console.log("param", param);
      console.log("url", this.urlBase + 'search/' + param);
      return this._http.post(this.urlBase + 'search/' + param, httpOptions);
    } catch (error) {
      // Manejar el error si param no es una cadena JSON válida
      console.error('Error al analizar el parámetro JSON:', error);
      return of(null); // Puedes devolver un Observable con un valor nulo o un valor de error personalizado
    }
  }

  getOnePrestador(param: any): Observable<any> {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200/', // Especifica el origen permitido
          'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE', // Métodos permitidos
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',

        })
      };
      console.log("param", param);
      console.log("url", this.urlBase + 'search/' + param);
      return this._http.post(this.urlBase + 'search/one/' + param, httpOptions);
    } catch (error) {
      // Manejar el error si param no es una cadena JSON válida
      console.error('Error al analizar el parámetro JSON:', error);
      return of(null); // Puedes devolver un Observable con un valor nulo o un valor de error personalizado
    }
  }

  getPrestadorWithOS(param: any): Observable<any> {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200/', // Especifica el origen permitido
          'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE', // Métodos permitidos
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',

        })
      };
      return this._http.get(this.urlBase + 'searchos/' + param, httpOptions);
    } catch (error) {
      // Manejar el error si param no es una cadena JSON válida
      console.error('Error al analizar el parámetro JSON:', error);
      return of(null); // Puedes devolver un Observable con un valor nulo o un valor de error personalizado
    }
  }

  getExportarPrestadores(param: any): Observable<Blob> {
    if(param.length === 0) {
      return this._http.get(this.urlBase + 'exportall/', {
      responseType: 'blob' // 👈 importante para recibir archivos
      });
    }
    return this._http.get(this.urlBase + 'export/' + param, {
      responseType: 'blob' // 👈 importante para recibir archivos
    });
  }

}
