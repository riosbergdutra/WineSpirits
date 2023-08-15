import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../interface/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {
  wine: Wine | undefined;
  relatedWines: Wine[] = [];

  constructor(private wineService: WineService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadWineAndRelated();
  }

  loadWineAndRelated(): void {
    const wineId = Number(this.route.snapshot.paramMap.get('id'));

    this.wineService.getWineById(wineId).subscribe(wine => {
      this.wine = wine;
      this.loadRelatedWines(wine?.type || ''); // Passando o tipo do vinho, ou uma string vazia se for nulo
    });
  }

  loadRelatedWines(type: string): void {
    this.wineService.getRelatedWinesByType(type).subscribe(relatedWines => {
      // Excluindo o próprio vinho da lista de relacionados
      if (this.wine) {
        this.relatedWines = relatedWines.filter(relatedWine => relatedWine.id !== this.wine.id);
      }
    });
  }
}
