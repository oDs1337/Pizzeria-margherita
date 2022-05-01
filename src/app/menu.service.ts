import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENU } from './mock-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Observable<Menu[]>{
    return of(MENU);
  }
}
