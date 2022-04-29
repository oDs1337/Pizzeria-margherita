import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';

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

  registerPressed(){
    this.accountService.addAccount(this.username,this.password);
  }

  inputUsername(value: string){
    this.username = value;
  }
  inputPassword(value: string){
    this.password = value;
  }

}
