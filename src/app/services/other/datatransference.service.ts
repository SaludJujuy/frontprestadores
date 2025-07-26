import { Injectable } from '@angular/core';
import { Prestador } from 'src/app/models/prestador.model';

@Injectable({
  providedIn: 'root'
})
export class DatatransferenceService {

  private data:any;
  private prestador: any;

  constructor() { }

  setData(data: any): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  setPrestador(prestador: any): void{
    this.prestador = prestador;
  }

  getPrestador():any{
    return this.prestador;
  }
}
