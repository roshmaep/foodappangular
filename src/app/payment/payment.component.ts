import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  hname=""
  cno=""
  validity=""
  cvv=""
  daddress=""
  readValues=()=>
{
  let data:any={"hname":this.hname,"cno":this.cno,"validity":this.validity,"cvv":this.cvv,"daddress":this.daddress}
  console.log(data)
}
}
