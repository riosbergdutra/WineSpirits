import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  showOverlay: boolean = false;
  showOverlay2: boolean = false

  // Função para abrir a tela sobreposta
  openOverlay() {
    this.showOverlay = true;
  }

  // Função para fechar a tela sobreposta
  closeOverlay() {
    this.showOverlay = false;
  }
  openOverlay2(){
    this.showOverlay2 = true;
  }

  closeOverlay2() {
    this.showOverlay2 = false
  }

  formgroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginServiceService // Injete o serviço CadastroService
  ) {
    this.formgroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formgroup.valid) {
      const formData = this.formgroup.value;
      const { email, password } = formData;

      // Verifica se o cadastro existe usando o método verificarCadastro do serviço CadastroService
      this.loginService.verificarCadastro(email, password).subscribe(
        (response) => {
          if (response.length > 0) {
            console.log('Cadastro encontrado:', response);

            // Redireciona o usuário para outra página
            this.router.navigate(['home']);
          } else {
            console.log('Cadastro não encontrado. Verifique os dados informados.');
          }
        },
        (error) => {
          console.error('Erro ao verificar o cadastro:', error);
        }
      );
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
