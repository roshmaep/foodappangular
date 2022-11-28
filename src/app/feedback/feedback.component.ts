import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedback=""

  readValues=()=>
{
  let data:any={"feedback":this.feedback}


}
}
