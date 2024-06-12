import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Book } from './test-request/test-request-get/test-request-get';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appHttpBook]'
})
export class HttpBookDirective {
  bookList:Book[] = [];
  @Output() appHttpBook = new EventEmitter();

  constructor(private http: HttpClient){}
  @HostListener('input', ['$event']) loadBook(event: any){
    //console.log(event)
    const INPUT_TEXT:HTMLInputElement = event.target;
    this.http.get<Book[]>("https://www.anapioficeandfire.com/api/books?name="+INPUT_TEXT.value).subscribe(res=>{
      this.appHttpBook.emit(res);
    })
  }
}
