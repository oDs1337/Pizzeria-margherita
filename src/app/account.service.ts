import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { ACCOUNTS } from './mock-account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  #accountList: Account[] = [];
  #isLoggedIn = false;

  constructor(private router: Router) {
    this.getAccounts();
  }

  get isLoggedIn(){
    return this.#isLoggedIn;
  }

  logOutUser(){
    this.#isLoggedIn = false;
    this.router.navigate(['login']);
  }

  getAccounts(): void{
    this.#accountList = ACCOUNTS;
  }
  addAccount(username: string, password: string){
    this.#accountList.push({username,password});
  }


  loginUser({username, password}: Account){
    this.#accountList.forEach(element => {
      if((username === element.username) && (password === element.password)){
        this.#isLoggedIn = true;
        this.router.navigate(['order']);
      }
    });
  }



}
