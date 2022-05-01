import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  submitPressed(value: Account){
    this.accountService.loginUser(value);
  }

  logOutUser(){
    this.accountService.logOutUser();
  }

}
