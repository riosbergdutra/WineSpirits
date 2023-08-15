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

    this.wineService.getWine(wineId).subscribe(wine => {
      this.wine = wine;
      this.loadRelatedWines(this.wine.type);
    });
  }

  loadRelatedWines(type: string): void {
    this.wineService.getRelatedWinesByType(type).subscribe(relatedWines => {
      this.relatedWines = relatedWines;
    });
  }
}
