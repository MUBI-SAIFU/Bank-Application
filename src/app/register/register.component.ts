import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //user typed values from ngModel(two way binding)
  uname = ""
  acno = ""
  pswd = ""

  //reactive form - group
            //formControlName(mentioned @html) declared as form Array instead of ngModel
  registerForm = this.fb.group({
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]], //validation  using letters or spaces
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],//accept only numbers
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]//accept bot umbers and letters
  })


  constructor(private ds: DatabaseService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm);

    // if(this.registerForm.get('uname')?.errors){
    //   alert("Invalid Username") //validation not satisfied as per pattern in line 22
    // }


    if (this.registerForm.valid) { //check validation

      var uname = this.registerForm.value.uname;
      var acno = this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;

      let result = this.ds.register(acno, pswd, uname)  //from service.ts file

      if (result) {  //result=true
        alert("Account registered successfully")
        this.router.navigateByUrl("")
      }
      else {
        alert("Account already exist")
      }

    }
    else{
      alert("Invalid Form")
    }


  }
}
