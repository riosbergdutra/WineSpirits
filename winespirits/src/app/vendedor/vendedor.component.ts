import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Wine } from '../interface/wine';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent {
  product: Wine = {
    id: 0,
    name: '',
    year: 0,
    type: 'Tinto',
    imageUrl: '',
    price: 0,
    description: '',
    productdescription: ''
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.createProduct(this.product).subscribe(
      response => {
        console.log('Produto cadastrado com sucesso:', response);
        // Limpar o formulário após o cadastro bem-sucedido
        this.product = {
          id: 0,
          name: '',
          year: 0,
          type: '',
          imageUrl: '',
          price: 0,
          description: '',
          productdescription: ''
        };
      },
      error => {
        console.error('Erro ao cadastrar produto:', error);
      }
    );
  }
}
