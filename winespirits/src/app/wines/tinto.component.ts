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

  // Propriedades para armazenar URLs de compartilhamento
  whatsappShareUrl = '';
  facebookShareUrl = '';
  twitterShareUrl = '';
  emailShareUrl = '';
  copyUrlInput = ''; // Propriedade para armazenar a URL a ser copiada


  constructor(private wineService: WineService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wineService.getWineById(id).subscribe((wine) => {
      this.wine = wine;
      // Construir URLs de compartilhamento dinamicamente
      this.buildShareUrls();
    });
  }

  buildShareUrls() {
    const baseAppUrl = window.location.href;
    const wineId = this.wine?.id || '';

    this.whatsappShareUrl = `https://api.whatsapp.com/send?text=${baseAppUrl}`;
    this.facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${baseAppUrl}`;
    this.twitterShareUrl = `https://twitter.com/intent/tweet?url=${baseAppUrl}&text=Confira este vinho incrível!`;
    this.emailShareUrl = `mailto:?subject=Confira este vinho incrível&body=${baseAppUrl}`;
    this.copyUrlInput = baseAppUrl;

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
