import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { ACCOUNTS } from './mock-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<Account[]>{
    return of(ACCOUNTS);
  }
  addAccount(username: string, password: string){
    ACCOUNTS.push({username,password});
  }

}
