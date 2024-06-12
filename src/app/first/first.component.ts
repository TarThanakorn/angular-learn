import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  title = 'angular-project';
  name = 'Thanakorn';

  sendAlert() {
    alert('Hello, ' + this.name);
  }

  changeName(name: string) {
    if (name == "") {
      alert('กรุณาระบุชื่อ!');
    } else {
      this.name = name;
      alert('The name has been changed');
    }
  }

}
