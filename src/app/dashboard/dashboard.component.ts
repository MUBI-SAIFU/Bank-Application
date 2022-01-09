import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // //from deposit form
  // acno = ""
  // pswd = ""
  // amount = ""

  // //from withdraw form
  // acno1 = ""
  // pswd1 = ""
  // amount1 = ""

  //reactive form
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],//accept only numbers
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],//accept bot umbers and letters
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]//accept only numbers
  })

  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],//accept only numbers
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],//accept bot umbers and letters
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]//accept only numbers
  })


  constructor(private ds: DatabaseService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  deposit() {
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if (this.depositForm.valid) {
      let result = this.ds.deposit(acno, pswd, amount)

      if (result) {
        alert(amount + " credited. New balance is : " + result)
      }

    }

    else {
      alert("Invalid Form")
    }

  }


  withdraw() {
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if (this.withdrawForm.valid) {
      let result = this.ds.withdraw(acno, pswd, amount)

      if (result) {
        alert(amount + " debited. New balance is : " + result)
      }
    }
    else {
      alert("Invalid Form")
    }
  }





}
