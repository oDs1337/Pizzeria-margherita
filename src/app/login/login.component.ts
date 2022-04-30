import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountList: Account[] = [];
  username: string = "";
  password: string = "";
  loggedSession: boolean = false;


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void{
    this.accountService.getAccounts()
        .subscribe(accounts => this.accountList = accounts);
  }

  submitPressed(value: Account){
    this.username = value.username;
    this.password = value.password;
    this.getAccounts();
    this.doesUserExist();
    console.log(this.loggedSession);
  }

  doesUserExist(){
    for(let i=0;i<this.accountList.length;i++){
      if((this.username === this.accountList[i].username) && (this.password === this.accountList[i].password)){
        this.loggedSession = true;
      }
    }
  }

}
