import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  cols = ['Vin', 'Year', 'Brand', 'Color'];
  cars =
    [
      {
        Vin: 'GHw0Y',
        Year: '2010',
        Brand: 'Titan',
        Color: 'Red'
      },
      {
        Vin: 'HrOuu',
        Year: '2013',
        Brand: 'Carson',
        Color: 'Green'
      },
      {
        Vin: 'LaOM7',
        Year: '2015',
        Brand: 'Kitano',
        Color: 'Blue'
      },
      {
        Vin: 'a9Q1m',
        Year: '2016',
        Brand: 'Titan',
        Color: 'Yellow'
      }
    ]
}
