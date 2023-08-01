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
}
