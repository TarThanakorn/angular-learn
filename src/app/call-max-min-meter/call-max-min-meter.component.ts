import { Component } from '@angular/core';

@Component({
  selector: 'app-call-max-min-meter',
  templateUrl: './call-max-min-meter.component.html',
  styleUrl: './call-max-min-meter.component.scss'
})
export class CallMaxMinMeterComponent {
  myMaxLabel = 'myMaxLabel (this property binding from caller component)'
  showMin(counter: number){
    alert("Now Min = "+ counter);
  }
  showMax(counter: number){
    alert("Now Max = "+ counter);
  }
}
