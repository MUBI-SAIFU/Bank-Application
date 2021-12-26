import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //in Angular, everything should be written inside class
  //class have a constructor,ngOninit and user defined variables/functions
  //while compiling this, run order same as above
  //variables/dictionary declare before constructor

  aim="Your Perfect Banking Partner" //used in string interpolation

  accno="Your Account No Please"  //used in property binding


  users:any = {
    //primary key will be account number
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000},
    1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000}

  }

  acno=""   // to hold user typed account numbers

  pswd=""   // to hold user typed password

  constructor() { }

  ngOnInit(): void {
  }


  acnoChange(event:any){   //if we are not sure about the data type of argument use 'any'
   this.acno=event.target.value; //user entered account no taken
   console.log(this.acno);
   
  }

  pswdChange(event:any){   //if we are not sure about the data type of argument use 'any'
    this.pswd=event.target.value; //user entered password taken
    console.log(this.pswd);
    
   }



  // login(){

  //   var account_no= this.acno;
  //   var password= this.pswd;

  //   let database= this.users;
    
    
  //   if(account_no in database){
  //     if(password == database[account_no]["password"]){
  //       alert("login success")

  //     }
  //     else{
  //       alert("invalid password")
  //     }

  //   }
  //   else{
  //     alert("invalid account number")
  //   }

  // }

login(a:any,p:any){ //since it is a template reference variable evoked function

  var account_no= a.value;//user entered value 
    var password= p.value;//user entered value

    let database= this.users;
    
    
    if(account_no in database){
      if(password == database[account_no]["password"]){
        alert("login success")

      }
      else{
        alert("invalid password")
      }

    }
    else{
      alert("invalid account number")
    }

  }
  


}
