import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  loggedInEmail: string = ''; // Variável para armazenar o email do usuário logado

  constructor(private authService: AuthenticationService) {
    // Atualiza a variável loggedInEmail ao inicializar o HeaderComponent
    this.loggedInEmail = this.authService.getLoggedInEmail();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get menuStyles() {
    return {
      display: this.isMenuOpen ? 'block' : 'none'
    };
  }
}
