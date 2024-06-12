import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrl: './shopping-search.component.scss'
})
export class ShoppingSearchComponent {
  @Output() onInput = new EventEmitter<string>();
  //When stop typing 0.4sec will search
  //@Output() onSearch = this.onInput.pipe(debounceTime(400));
  //Every 0.4sec will search
  @Output() onSearch = this.onInput.pipe(auditTime(400));
  inputSearch(text: string){
      this.onInput.emit(text);
  }
}
