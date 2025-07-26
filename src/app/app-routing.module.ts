import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestadoresComponent } from './components/prestadores/prestadores.component';
import { ZonasComponent } from './components/zonas/zonas.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ObrasSocialesComponent } from './components/obras-sociales/obras-sociales.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { AuthGuard } from './util/auth.guard';
import { PrestadorComponent } from './components/prestador/prestador.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { AfiliadosComponent } from './components/afiliados/afiliados.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path:'login',component: LoginComponent},
  { path:'prestadores', component:PrestadoresComponent,canActivate:[AuthGuard] },
  { path:'prestador', component:PrestadorComponent,canActivate:[AuthGuard] },
  { path:'zona', component:ZonasComponent,canActivate:[AuthGuard] },
  { path:'especialidades', component:EspecialidadesComponent,canActivate:[AuthGuard] },
  { path:'obrasocial', component:ObrasSocialesComponent,canActivate:[AuthGuard] },
  { path:'cuenta', component:CuentaComponent,canActivate:[AuthGuard] },
  { path:'afiliados', component:AfiliadosComponent,canActivate:[AuthGuard] },
  // Redireccionar a la lista de prestadores si la ruta no coincide con ninguna de las anteriores
  // Esto es útil para manejar rutas no encontradas
  { path:'**',redirectTo:'prestadores',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
