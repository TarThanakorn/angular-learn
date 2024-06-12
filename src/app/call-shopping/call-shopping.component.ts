import { Component } from '@angular/core';
import { Product } from '../shopping/model/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-call-shopping',
  templateUrl: './call-shopping.component.html',
  styleUrl: './call-shopping.component.scss'
})
export class CallShoppingComponent {
  /*products: Product[] = [
    { name: 'Banana', description: 'ผลไม้', price: 40 },
    { name: 'Apple', description: 'ผลไม้', price: 20 },
    { name: 'Cherry', description: 'ผลไม้', price: 30 },
    { name: 'Pine Apple', description: 'ผลไม้', price: 40 },
    { name: 'Mango', description: 'ผลไม้', price: 60 },
    { name: 'Mangosteen', description: 'ผลไม้', price: 40 },
    { name: 'Melon', description: 'ผลไม้', price: 80 },
    { name: 'Water Melon', description: 'ผลไม้', price: 10 }
  ];*/
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Product[]>('/api/product').subscribe((res) => {
      this.products = res;
      this.filteredProduct = res;
    })
  }

  filteredProduct: Product[] = this.products;

  searchProduct(text: string) {
    this.filteredProduct = this.products.filter(product => {
      const PRODUCT_NAME = product.name.toLowerCase();
      const SEARCH_NAME = text.toLowerCase();
      return PRODUCT_NAME.indexOf(SEARCH_NAME) !== -1
    })
  }
}
