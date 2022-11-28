import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  foodc=""
  foodI=""
  quantity=""

  readValues=()=>
{
  let data:any={"foodc":this.foodc,"foodI":this.foodI,"quantity":this.quantity}
}
}
