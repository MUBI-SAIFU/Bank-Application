import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  users: any = {

    1000: { acno: 1000, uname: "Neer", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "Laisha", password: "1001", balance: 5000 },
    1002: { acno: 1002, uname: "Vyom", password: "1002", balance: 5000 }

  }
  constructor() { }

  register(acno: any, password: any, uname: any) {

    let db = this.users   //from dependency injection

    if (acno in db) {
      return false
    }
    else {   //added to database
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(db);
      return true
    }
  }

  login(acno: any, password: any) {
    let database = this.users;

    if (acno in database) {

      if (password == database[acno]["password"]) {
        return true
      }

      else {
        alert("Incorrect password")
        return false
      }
    }

    else {
      alert("Invalid Account Number")
      return false
    }
  }

//function definition here. call at dashboard.ts
  deposit(acno: any, password: any, amt: any) { //user entering values inside paranthesis

     var amount = parseInt(amt) //to convert string into number

    let db = this.users

    if (acno in db) {

      if (password == db[acno]["password"]) {
        db[acno]["balance"] = db[acno]["balance"] + amount
        return db[acno]["balance"]
      }
      else {
        alert("Incorrect password")
        return false
      }

    }
    else {
      alert("Account does not exist")
      return false
    }
  }

  withdraw(acno: any, password: any, amt: any) { //user entering values inside paranthesis

    var amount = parseInt(amt) //to convert string into number

   let db = this.users

   if (acno in db) {

     if (password == db[acno]["password"]) {

      if(db[acno]["balance"]>amount){ 
       db[acno]["balance"] = db[acno]["balance"] - amount
       return db[acno]["balance"]
      }
      else{
        alert("Insufficient balance")
        return false
      }
     }
     else {
       alert("Incorrect password")
       return false
     }

   }
   else {
     alert("Account does not exist")
     return false
   }
 }


}

