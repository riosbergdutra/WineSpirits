import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../interface/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-tinto',
  templateUrl: './tinto.component.html',
  styleUrls: ['./tinto.component.css']
})
export class WinesComponent implements OnInit {
  wine: Wine | undefined;
  showShareOverlay = false;
  quantity = 1;


  constructor(private wineService: WineService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wineService.getVinho(id).subscribe((wine) => {
      this.wine = wine;

      // Suponhamos que você tenha a propriedade wine com as informações do vinho
      
    });
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


}
