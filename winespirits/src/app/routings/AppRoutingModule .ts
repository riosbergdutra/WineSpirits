import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { CadastrarSeComponent } from '../cadastrar-se/cadastrar-se.component';
import { LoginComponent } from '../login/login.component';
import { WinesComponent } from '../wines/wines.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial - Home
  { path: 'login', component: LoginComponent }, // Página de login
  { path: 'cadastro', component: CadastrarSeComponent },   // Página de cadastro
  { path: 'vinho/:type/:id', component: WinesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
