import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

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


  

  acno=""   // to hold user typed account numbers 
  //this is used as variable for two way binding. inside ngModel

  pswd=""   // to hold user typed password
  //this is used as variable for two way binding. inside ngModel


  loginForm = this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],//accept only numbers
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]//accept bot umbers and letters

  })



//dependency injection from Router class to use navigateByUrl method to redirect to dashboard page
  constructor(private router:Router,private ds:DatabaseService,private fb:FormBuilder) {

   }

  ngOnInit(): void {
  }


  // acnoChange(event:any){   //if we are not sure about the data type of argument use 'any'
  //  this.acno=event.target.value; //user entered account no taken
  //  console.log(this.acno);
   
  // }

  // pswdChange(event:any){   //if we are not sure about the data type of argument use 'any'
  //   this.pswd=event.target.value; //user entered password taken
  //   console.log(this.pswd);
    
  //  }



  login(){

    var acno = this.loginForm.value.acno
    var password = this.loginForm.value.pswd


    if(this.loginForm.valid){
      let result= this.ds.login(acno,password)
    

    if(result){
      alert("Login Success")
      this.router.navigateByUrl('dashboard')
    }

  }

  else{
    alert("Invalid Form")
  }

// login(a:any,p:any){ //since it is a template reference variable evoked function

//   var account_no= a.value;//user entered value 
//     var password= p.value;//user entered value

//     let database= this.users;
    
    
//     if(account_no in database){
//       if(password == database[account_no]["password"]){
//         alert("login success")

//       }
//       else{
//         alert("invalid password")
//       }

//     }
//     else{
//       alert("invalid account number")
//     }

//   }
  
  }
}
