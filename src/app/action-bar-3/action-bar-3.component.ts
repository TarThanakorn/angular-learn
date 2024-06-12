import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-3',
  templateUrl: './action-bar-3.component.html',
  styleUrl: './action-bar-3.component.scss'
})
export class ActionBar3Component {
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();

  // For *ngIfelse
  @Input() inputDisplay = true;

  // For two way component
  @Input() counter = 0;

  decrease() {
    if (this.counter > 0){
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter);
    }
  }
  increase() {
    if (this.counter < 100){
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
