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
    this.loadWineAndRelated()
  }

  loadWineAndRelated(): void {
    const wineId = Number(this.route.snapshot.paramMap.get('id'));

    this.wineService.getWineById(wineId).subscribe(wine => {
      this.wine = wine;
      if (wine && wine.type) {
        this.loadRelatedWines(wine.type);
      }
    });
  }

  loadRelatedWines(type: string): void {
    this.wineService.getRelatedRandomWinesByType(type).subscribe(relatedWines => {
      // Excluindo o próprio vinho da lista de relacionados
      if (this.wine && this.wine.id) {
        this.relatedWines = relatedWines.filter(relatedWine => relatedWine.id !== this.wine?.id);
        this.shuffleRelatedWines(); // Embaralhar a lista de vinhos relacionados
      } else {
        this.relatedWines = relatedWines; // Defina a lista completa se this.wine for nulo
      }
    });
  }
  shuffleRelatedWines(): void {
    for (let i = this.relatedWines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.relatedWines[i], this.relatedWines[j]] = [this.relatedWines[j], this.relatedWines[i]];
    }
  }
}
