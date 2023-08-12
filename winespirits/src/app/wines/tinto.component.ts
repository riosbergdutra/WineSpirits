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
  isCopied = false;
  buttonText = 'Copiar';

  constructor(private wineService: WineService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wineService.getVinho(id).subscribe((wine) => {
      this.wine = wine;
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

  copyUrl(url: string) {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}
