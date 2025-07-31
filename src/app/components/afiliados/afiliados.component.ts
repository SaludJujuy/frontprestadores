import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Route } from '@angular/router';
import { Prestador } from 'src/app/models/prestador.model';
import { DatatransferenceService } from 'src/app/services/other/datatransference.service';
import { PrestadorService } from 'src/app/services/prestador/prestador.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent {
  element: any;
  prestador: Prestador
  displayedColumns: string[] = ['IdReceta','Numero','NroAfiliado','NombreAfiliado','NombrePlan','FechaEmision'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, tds: DatatransferenceService, private pres_service: PrestadorService) {
    this.element = tds.getPrestador();
    this.prestador = new Prestador(this.element.IdPrestador, this.element.Nombre,this.element.NroPrestador,this.element.Tipo,this.element.Matricula);    
    console.log(this.prestador);     
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarDatos(){
    this.pres_service.getPrestadorWithAfiliado(this.prestador.getId()).subscribe((data)=>{
      this.dataSource.data = data;
      console.log(this.dataSource.data,data);
    });
  }

  descargarCSV() {
    this.pres_service.getExportarAfiliados(this.prestador.id).subscribe({
    next: (data: Blob) => {
      const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'afiliados.csv');
      },
      error: (err) => {
        console.error('Error al descargar el archivo CSV:', err);
      }
    });
  }

  salir(){
    this.router.navigate(['/prestador']);
  }
}
