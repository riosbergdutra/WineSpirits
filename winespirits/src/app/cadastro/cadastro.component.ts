import { Component, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  Overlay: boolean = true;
  formgroup: FormGroup;
  name: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginServiceService,
    private router: Router
  ) {
    this.formgroup = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dataNascimento: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.formgroup.valid) {
      const formData = this.formgroup.value;

      // Envia os dados para o serviço usando o método enviarDadosFormulario
      this.loginservice.enviarDadosFormulario(formData).subscribe(
        (response) => {
          console.log('Dados do formulário enviados com sucesso:', response);

          // Aguarda 1 segundo (1000 milissegundos) antes de redirecionar para a página inicial
          setTimeout(() => {
            this.router.navigate(['']);
            // Define a propriedade overlay como true novamente para mostrar o overlay na próxima vez que o usuário clicar para cadastrar
          }, 1000);
        },
        (error) => {
          console.error('Erro ao enviar os dados do formulário:', error);
        }
      );
    } else {
      alert('Formulário inválido. Verifique os campos.');
    }
  }
}
