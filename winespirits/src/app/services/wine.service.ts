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
    const params: any = {};
    if (tipoVinho && tipoVinho.trim() !== '') {
      params.type = tipoVinho;
    }
    if (precoMinimo && precoMinimo > 0) {
      params.price = precoMinimo;
    }

    return this.http.get<Wine[]>(this.apiUrl, { params });
  }

  getVinho(id: number): Observable<Wine> {
    return this.http.get<Wine>(`${this.apiUrl}/${id}`);
  }

  getWineById(id: number): Observable<Wine> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Wine>(url);
  }

  getRelatedWinesByType(type: string): Observable<Wine[]> {
    const url = `${this.apiUrl}?type=${type}&_limit=3`; // Substitua 'type' pelo campo correspondente na sua API
    return this.http.get<Wine[]>(url);
  }
}
