import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../interface/wine';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'; // Altere a URL para a sua API json-server

  constructor(private http: HttpClient) {}

  createProduct(product: Wine): Observable<Wine> {
    return this.http.post<Wine>(`${this.apiUrl}/wines`, product);
  }
}
