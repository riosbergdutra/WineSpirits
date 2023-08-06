import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
    private authService: AuthenticationService
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

      if (this.authService.login(email, password)) {
        this.router.navigate(['']); // Redireciona para a página principal após o login
      } else {
        console.log('Login falhou. Verifique as credenciais.');
      }
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
