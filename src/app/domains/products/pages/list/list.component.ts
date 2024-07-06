import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductComponent } from '../../components/product/product.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products= signal<Product[]>([]);
  //cart= signal<Product[]>([]);
  private cartService= inject(CartService);


  constructor(){
    const initProducts:Product[]=[
      {
        id:Date.now(),
        title: 'Pro 1',
        price:100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id:Date.now(),
        title: 'Pro 2',
        price:100,
        image: 'https://picsum.photos/640/640?r=30',
        creationAt: new Date().toISOString()
      },
      {
        id:Date.now(),
        title: 'Pro 3',
        price:100,
        image: 'https://picsum.photos/640/640?r=31',
        creationAt: new Date().toISOString()
      },
      {
        id:Date.now(),
        title: 'Pro 4',
        price:200,
        image: 'https://picsum.photos/640/640?r=32',
        creationAt: new Date().toISOString()
      },
      {
        id:Date.now(),
        title: 'Pro 5',
        price:300,
        image: 'https://picsum.photos/640/640?r=33',
        creationAt: new Date().toISOString()
      },
      {
        id:Date.now(),
        title: 'Pro 6',
        price:400,
        image: 'https://picsum.photos/640/640?r=34',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
  }

}
