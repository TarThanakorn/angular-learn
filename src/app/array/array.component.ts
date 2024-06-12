import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})
export class ArrayComponent {
  customerList:string[] = ['customer1', 'customer2', 'customer3', 'customer4'];
  /*
    add data to front using .unshift()
    add data to selected index using .Splice()
    add data to back using .push()
  */
  pushCustomer(){
    this.customerList.push('customer'+(this.customerList.length+1));
  }
  unshiftCustomer(){
    this.customerList.unshift('customer'+(this.customerList.length+1));
  }
  spliceCustomer(){
    // .splice(index, deleteData, newString)
    this.customerList.splice(1,0,'customer'+(this.customerList.length+1));
  }
  removeCustomer(index:number){
    this.customerList.splice(index,1);
  }
}
