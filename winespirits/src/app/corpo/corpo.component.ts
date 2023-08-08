import { Component } from '@angular/core';
import { Wine } from '../interface/wine';
import { WineService } from '../services/wine.service';
import { ActivatedRoute, Router } from '@angular/router'; // Importe o Router
@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {
  wines: Wine[] = [];
  tipoVinho: string = '';
  precoMinimo: number = 0; 
  constructor(
    private wineService: WineService,
    private router: Router // Injete o Router
  ) { }

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
    this.wineService.realizarPesquisaAvancada(
      this.tipoVinho,
      this.precoMinimo
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
      this.tipoVinho = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
    }
  }

  // Função para navegar para a página de detalhes do vinho
  goToWineDetail(wineId: string) {
    this.router.navigate(['/vinho', wineId]);
  }
}
