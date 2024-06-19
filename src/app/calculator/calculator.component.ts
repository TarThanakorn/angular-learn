import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  pricePerUser = 0;
  calculateSharing(price: string) {
    const PRICE = Number(price);
    if (PRICE <= 0) {
      alert("ราคาต้องมีค่ามากกว่า 0");
    } else {
      this.pricePerUser = (PRICE * 3) / 4;
    }
  }
}
