import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routings/AppRoutingModule';
import { HomeComponent } from './home/home.component';
import { CorpoComponent } from './corpo/corpo.component';
import { FooterComponent } from './footer/footer.component';
import { CadastrarSeComponent } from './cadastrar-se/cadastrar-se.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WinesComponent } from './wines/tinto.component';
import { ContatoComponent } from './contato/contato.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CorpoComponent,
    FooterComponent,
    CadastrarSeComponent,
    LoginComponent,
    WinesComponent,
    ContatoComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
