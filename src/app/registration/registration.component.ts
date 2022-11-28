import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name=""
  address=""
  email=""
  phone=""
  username=""
  password=""
  confirmpassword=""
  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
}
}
