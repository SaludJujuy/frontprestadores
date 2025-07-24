import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EspecialidadService } from 'src/app/services/especialidad/especialidad.service';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent {
  text: string;
  //text = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['IdEspecialidad', 'Especialidad', 'Activo'];
  dataSource = new MatTableDataSource<any>();
  
  constructor(private pres_service: EspecialidadService){this.text='';}

  ngOnInit(): void {
    this.cargarDatos();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarDatos(){
    this.pres_service.getEspecialidades().subscribe((data)=>{
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
      this.pres_service.getEspecialidad(texto).subscribe((data) => {
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
