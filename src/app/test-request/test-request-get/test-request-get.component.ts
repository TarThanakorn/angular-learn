import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './test-request-get';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss'
})
export class TestRequestGetComponent {
  bookList:Book[]= [];
  constructor(private service:BookService){}
  ngOnInit(): void{
    this.searchByName("");
  }
  searchByName(bookName: string){
    this.service.httpBook(bookName).subscribe(res=>{
      this.bookList = res;
    })
  }
}
