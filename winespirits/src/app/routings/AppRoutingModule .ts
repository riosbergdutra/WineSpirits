import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { FrontPageComponent } from '../front-page/front-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home',  component: FrontPageComponent}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
