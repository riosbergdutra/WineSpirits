import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Aqui você pode adicionar a lógica para processar o formulário
  }
}
