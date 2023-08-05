import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../interface/wine';
import { map } from 'rxjs/operators';

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
    return this.http.get<Wine[]>(this.apiUrl).pipe(
      map((wines: Wine[]) => {
        // Filtrar por tipo de vinho (se o tipo for selecionado)
        if (tipoVinho && tipoVinho.trim() !== '') {
          wines = wines.filter((wine: Wine) => wine.type === tipoVinho);
        }

        // Filtrar por preço mínimo (se o preço mínimo for informado)
        if (precoMinimo && precoMinimo > 0) {
          wines = wines.filter((wine: Wine) => wine.price >= precoMinimo);
        }

        // Adicione mais lógicas de filtragem aqui para outros campos de pesquisa, se necessário

        return wines;
      })
    );
  }
}
