import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInEmail: string = '';

  constructor() { }

  login(email: string, password: string): boolean {
    this.loggedInEmail = email;
    return true;
  }

  getLoggedInEmail(): string {
    return this.loggedInEmail;
  }

  logout(): void {
    this.loggedInEmail = '';
  }
}
