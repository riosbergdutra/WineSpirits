import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../interface/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private apiUrl = 'http://localhost:3000/wines'; // Substitua pela URL da sua API de vinhos

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.apiUrl);
  }

  realizarPesquisaAvancada(tipoVinho: string, precoMinimo: number): Observable<Wine[]> {
    // Realize a chamada para a API com os parâmetros de pesquisa avançada
    const params: any = {};
    if (tipoVinho && tipoVinho.trim() !== '') {
      params.type = tipoVinho;
    }
    if (precoMinimo && precoMinimo > 0) {
      params.price = precoMinimo;
    }

    return this.http.get<Wine[]>(this.apiUrl, { params });
  }
}
