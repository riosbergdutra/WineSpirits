import { Component } from '@angular/core';
import { Wine } from '../interface/wine';
import { WineService } from '../services/wine.service';
@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {
  wines: Wine[] = [];
  tipoVinho: string = ''; // Valor padrão vazio para o tipoVinho
  precoMinimo: number = 0; // Valor padrão de 0 para o precoMinimo
  constructor(private wineService: WineService) { }
  ngOnInit() {
    this.loadWines();
  }
  loadWines() {
    this.wineService.getWines().subscribe(
      (data) => {
        this.wines = data;
      },
      (error) => {
        console.error('Erro ao carregar os vinhos:', error);
      }
    );
  }
  pesquisar() {
    // Chame o serviço de pesquisa com os parâmetros fornecidos
    this.wineService.realizarPesquisaAvancada(
      this.tipoVinho,
      this.precoMinimo
      // Adicione outros parâmetros da pesquisa avançada aqui, se necessário
    ).subscribe(
      (data) => {
        this.wines = data;
      },
      (error) => {
        console.error('Erro ao realizar pesquisa avançada:', error);
      }
    );
  }
  capitalizarPrimeiraLetra() {
    if (this.tipoVinho && this.tipoVinho.length > 0) {
      const palavras = this.tipoVinho.toLowerCase().split(' ');
      this.tipoVinho = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');}
    }
}
