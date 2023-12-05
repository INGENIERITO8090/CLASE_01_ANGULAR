import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import {RecuperarContrasenaComponent} from "./recuperar-contrasena/recuperar-contrasena.component";

const routes: Routes = [
{path:'',component :LoginComponent},
{path:'registrar',component:RegistrarComponent},
  {path:'recuperar',component:RecuperarContrasenaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
