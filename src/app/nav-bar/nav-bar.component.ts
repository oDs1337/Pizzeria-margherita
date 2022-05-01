import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  logOutUser(){
    this.accountService.logOutUser();
  }

}
