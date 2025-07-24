import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DeshboardComponent } from './shared/pages/deshboard/deshboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { PrestadoresComponent } from './components/prestadores/prestadores.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { FormsModule } from '@angular/forms';
import { ZonasComponent } from './components/zonas/zonas.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ObrasSocialesComponent } from './components/obras-sociales/obras-sociales.component';


import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ToastrModule } from 'ngx-toastr';
import { PrestadorComponent } from './components/prestador/prestador.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DeshboardComponent,
    NavComponent,
    PrestadoresComponent,
    ZonasComponent,
    EspecialidadesComponent,
    ObrasSocialesComponent,
    PrestadorComponent
  ],
  imports: [
    MatTabsModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule, 
    MatButtonModule,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,

    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
