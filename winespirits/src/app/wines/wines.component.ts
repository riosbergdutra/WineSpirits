import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Wine } from '../interface/wine';
import { WineService } from '../services/wine.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  wine$: Observable<Wine | undefined> = of(undefined); // Inicialize com undefined

  constructor(
    private wineService: WineService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const wineType = params.get('type'); // Obtenha o tipo do vinho
      if (wineType) {
        this.wineService.getWineDetails(wineType).subscribe(
          (wine) => {
            this.wine$ = of(wine);
          },
          (error) => {
            console.error('Erro ao carregar detalhes do vinho:', error);
          }
        );
      }
    });
  }
}
