import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-cadastrar-se',
  templateUrl: './cadastrar-se.component.html',
  styleUrls: ['./cadastrar-se.component.css']
})
export class CadastrarSeComponent {
  showOverlay: boolean = true;
  formgroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginServiceService,
    private router: Router,
  ) {
    this.formgroup = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dataNascimento: ['', [Validators.required, this.validarIdade.bind(this)]], // Certifique-se de fazer o bind do contexto corretamente
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
            this.router.navigate(['/login']);
            // Define a propriedade showOverlay como true novamente para mostrar o overlay na próxima vez que o usuário clicar para cadastrar
            this.showOverlay = true;
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

  // Função de validação customizada para verificar se a idade é maior ou igual a 18 anos
  validarIdade(control: AbstractControl): { [key: string]: any } | null {
    const dataNascimento = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();

    // Verifica se a data de nascimento já ocorreu este ano
    const dataNascimentoEsteAno = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    if (dataNascimentoEsteAno > hoje) {
      // Não podemos alterar a idade diretamente, então usamos a função setFullYear para obter a idade correta
      dataNascimento.setFullYear(dataNascimento.getFullYear() - 1);
    }

    if (dataNascimento > hoje || idade < 18) {
      return { idadeInvalida: true };
    }

    return null;
  }
}
