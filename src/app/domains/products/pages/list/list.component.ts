import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductComponent } from '../../components/product/product.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products= signal<Product[]>([]);

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
        title: 'Pro 2',
        price:100,
        image: 'https://picsum.photos/640/640?r=31',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event:string){
    console.log('estamos en el padre');
    console.log(event);
  }

}
