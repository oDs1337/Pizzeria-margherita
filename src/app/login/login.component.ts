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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  loginPressed(): void{
    this.getAccounts();

    for(let i=0; i<this.accountList.length;i++){
      if(this.username == this.accountList[i].username && this.password == this.accountList[i].password){
        console.log(`${this.username} logged in`);
      }
    }


  }
  doesUserExist(): boolean{

    return false;
  }

  inputUsername(value: string){
    this.username = value;
  }
  inputPassword(value: string){
    this.password = value;
  }

  getAccounts(): void{
    this.accountService.getAccounts()
        .subscribe(accounts => this.accountList = accounts);
  }

}
