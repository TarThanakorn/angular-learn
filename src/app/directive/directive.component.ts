import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from '../test-request/test-request-get/test-request-get';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  bookList = []
}
