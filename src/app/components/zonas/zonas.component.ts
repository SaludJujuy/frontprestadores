import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PrestadorService } from 'src/app/services/prestador/prestador.service';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ZonaService } from 'src/app/services/zona/zona.service';


@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements AfterViewInit{
  text: string;
  //text = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['IdZona', 'Zona'];
  dataSource = new MatTableDataSource<any>();
  
  constructor(private zona_service: ZonaService){this.text='';}

  ngOnInit(): void {
    this.cargarDatos();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarDatos(){
    this.zona_service.getZonas().subscribe((data)=>{
      this.dataSource.data=data;
    });
  }

  getErrorMessage() {
    /*if (this.text.hasError('required')) {
      return 'You must enter a value';
    }

    return this.text.hasError('email') ? 'Not a valid email' : '';*/
  }

  update_table(){
    const texto = this.text;
  
    //const searchText = (texto || '').trim().replace(/[,*]/g, '');
    //console.log(texto,searchText);
    if (texto === '') {
      console.log("entro");
      // Si el campo de texto está vacío, muestra todos los registros
      this.cargarDatos();
    } else {
      // Si hay texto, realiza una solicitud al servicio para obtener coincidencias
      this.zona_service.getZona(texto).subscribe((data) => {
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
}
