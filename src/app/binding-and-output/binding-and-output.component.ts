import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-and-output',
  templateUrl: './binding-and-output.component.html',
  styleUrl: './binding-and-output.component.scss'
})
export class BindingAndOutputComponent {
  onNumberChange(){
    alert("Now counter was changed!");
  }
  showNumberChange(counter: number){
    alert("Now counter is "+ counter);
  }
}
