import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formgroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginServiceService
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
            this.router.navigate(['']);
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


