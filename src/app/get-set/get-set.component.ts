import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  templateUrl: './get-set.component.html',
  styleUrl: './get-set.component.scss'
})
export class GetSetComponent {
  priceList = [10, 20, 30]
  get sumPrice() {
    const summary = this.priceList.reduce((sum, price) => sum + price, 0)
    return summary;
  }

  get productPrice() {
    return 100;
  }

  set productPrice(value: number) {
    console.log(value);
  }

  addPrice(price: number){
    this.priceList.push(price);
  }

  constructor() {
    console.log(this.productPrice);
  }
}
