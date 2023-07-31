import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  enviarDadosFormulario(formData: any): Observable<any> {
    const url = `${this.baseUrl}/formData`;
    return this.http.post(url, formData);
  }


  verificarCadastro(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/formData`;
    return this.http.get(url, { params: { email, password } });
  }
}
