import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss'
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'Min';
  @Input() maxLabel = 'Max';
  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();
  onMinChange(counter: number){
    this.minChange.emit(counter);
  }
  onMaxChange(counter: number){
    //alert("Now Max = "+ counter);
    this.maxChange.emit(counter);
  }
}
