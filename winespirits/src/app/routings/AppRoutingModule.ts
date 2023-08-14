import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { CadastrarSeComponent } from '../cadastrar-se/cadastrar-se.component';
import { LoginComponent } from '../login/login.component';
import { WinesComponent } from '../wines/tinto.component';
import { ContatoComponent } from '../contato/contato.component';
import { MapComponent } from '../map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastrarSeComponent },
  { path: 'vinho/:id', component: WinesComponent },
  {path: 'contato', component: ContatoComponent},
  {path: 'map', component: MapComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
