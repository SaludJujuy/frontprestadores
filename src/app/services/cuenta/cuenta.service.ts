import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  urlBase: string = "http://10.0.0.19:3000/api/cuenta/";

  constructor(private _http: HttpClient) { }

  getExportCuentaPrestadores(param: any): Observable<Blob> {
    return this._http.get(this.urlBase + "export/" + param, {
      responseType: 'blob'
    });
  }
}
