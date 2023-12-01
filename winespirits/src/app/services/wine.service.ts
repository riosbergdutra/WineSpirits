import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../interface/wine';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private apiUrl = 'http://localhost:3000/wines';
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

  getRelatedRandomWinesByType(type: string): Observable<Wine[]> {
    const url = `${this.apiUrl}?type=${type}`;
    return this.http.get<Wine[]>(url).pipe(
      map(relatedWines => {
        const shuffledWines = this.shuffleArray(relatedWines).slice(0, 3); // Embaralhar e pegar os primeiros 3
        return shuffledWines;
      })
    );
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
