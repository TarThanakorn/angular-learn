import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  templateUrl: './ngif-else.component.html',
  styleUrl: './ngif-else.component.scss'
})
export class NgifElseComponent {
  view:boolean = true;
  changeView(){
    if (this.view == false) this.view = true;
    else  this.view = false;
  }
}
