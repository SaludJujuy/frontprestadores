import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Prestador } from 'src/app/models/prestador.model';
import { DatatransferenceService } from 'src/app/services/other/datatransference.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent {
  prestador: any;

  constructor(tds: DatatransferenceService){
    this.prestador = tds.getPrestador();
    console.log(this.prestador);     
  }
}
