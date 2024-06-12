import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {
  squareWidth = 250;
  squareHeight = 100;

  changeWidth(width: string){
    const WIDTH = Number(width);
    this.squareWidth = WIDTH;
  }
  changeHeight(height: string){
    const HEIGHT = Number(height);
    this.squareHeight = HEIGHT;
  }
}
