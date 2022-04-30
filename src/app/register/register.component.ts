import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  submitPressed(value: Account){
    this.accountService.addAccount(this.username,this.password);
  }

}
