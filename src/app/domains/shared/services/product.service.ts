import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private http= inject(HttpClient);
//   constructor() { }

//   getProducts(){
//     return this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products");
//   }
// }

@Injectable({providedIn: 'root'})

export class ProductService {

    products= signal<Product[]>([]);

    url: string = "https://api.escuelajs.co/api/v1/products";  private http = inject(HttpClient);   getProducts(){

    return this.http.get<Product[]>(this.url)

    .pipe(map(products => this.transformProducts(products)));

  }

private transformProducts(products: Product[]): Product[] {return products.map(product => {

  // Realiza la transformación en cada producto aquí
  const transformedImages = product.images.map(image => {let modifiedImage = image.replace(/"/g, '');

  // Elimina comillas dobles

  modifiedImage = modifiedImage.replace(/\[/g, '').replace(/\]/g, '');

  // Elimina corchetes
  return modifiedImage;});
  return {...product,
  images: transformedImages

  };

});

}}
