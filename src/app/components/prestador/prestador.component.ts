import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DatatransferenceService } from 'src/app/services/other/datatransference.service';
import { PrestadorService } from 'src/app/services/prestador/prestador.service';
import { FormControl } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-prestador',
  templateUrl: './prestador.component.html',
  styleUrls: ['./prestador.component.css']
})

export class PrestadorComponent {
  element: any;
  prestador: any;
  obrasSociales: any;
  t: any
  lista: any[];
  obrasSocialesString: any;

  constructor(private tds: DatatransferenceService, private pres_service: PrestadorService, private cuenta_service: CuentaService) {
    this.lista = [];
    this.element = this.tds.getData();
    
    if (this.element === null) {
      this.element = {};
    }else{
      this.t = this.pres_service.getOnePrestador(this.element.IdPrestador).subscribe((data) => {
        this.prestador = data[0];
        console.log(this.prestador);
        
      });
      
      this.obtenerObrasSociales();
    }
    
  }

  obtenerObrasSociales() {
    this.t = this.pres_service.getPrestadorWithOS(this.element.IdPrestador).subscribe((data) => {
      this.obrasSociales = data;
      this.obrasSocialesString = data.map((item: any) => item.NombreLista).join(',\n'); // salto de línea
    });
  }

  descargarCSV() {
    this.cuenta_service.getExportCuentaPrestadores(this.element.IdPrestador).subscribe({
        next: (data: Blob) => {
          const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
          saveAs(blob, 'cuenta_prestador_' + this.element.Nombre + '.csv');
          },
          error: (err) => {
            console.error('Error al descargar el archivo CSV:', err);
          }
        });
  }
}
