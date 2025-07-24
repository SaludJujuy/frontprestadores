import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PrestadorService } from 'src/app/services/prestador/prestador.service';

import { DatatransferenceService } from 'src/app/services/other/datatransference.service';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import  * as jspdf from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

import { saveAs } from 'file-saver';

const jspdfInstance: any = jspdf;
@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css']
})
export class PrestadoresComponent implements AfterViewInit{
  

  text: string; 
  displayedColumns: string[] = ['IdPrestador', 'NroPrestador', 'CUIT_CUIL','Nombre', 'Tipo','ConvenioCamara','ConvenioSaludJujuy','Zona','Direccion'];
  dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private pres_service: PrestadorService, private tds: DatatransferenceService, private router: Router) {
    this.text='';
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarDatos(){
    this.pres_service.getPrestadores().subscribe((data)=>{
      this.dataSource.data=data;
    });
  }

  update_table(){
    const texto = this.text;
  
    if (texto === '') {
      console.log("entro");
      // Si el campo de texto está vacío, muestra todos los registros
      this.cargarDatos();
    } else {
      // Si hay texto, realiza una solicitud al servicio para obtener coincidencias
      this.pres_service.getPrestador(texto).subscribe((data) => {
        if (data.length > 0) {
          // Si se encontraron coincidencias, muestra la primera
          this.dataSource.data = data;
          console.log("encontrado");
        } else {
          // Si no se encontraron coincidencias, muestra un mensaje o un valor vacío
          this.dataSource.data = [];
          console.log("no encontrado");
        }
      });
    }

  }

  //jspdf: any = jspdf();
  
  generarPDF() {
    const element = document.getElementById('names'); // ID de la tabla

    if (element) {
      
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('prestadores.pdf');
      });
    } else {
      console.error('No se encontró el elemento con ID "names".');
    }
  }

  descargarCSV() {
    const texto = this.text;
    //console.log("texto: ", texto);
    this.pres_service.getExportarPrestadores(texto).subscribe({
    next: (data: Blob) => {
      const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'prestadores.csv');
      },
      error: (err) => {
        console.error('Error al descargar el archivo CSV:', err);
      }
    });
  }

  navigateToPrestador(element: any){
    this.tds.setData(element);
    this.router.navigate(['/prestador']);
  }

}
