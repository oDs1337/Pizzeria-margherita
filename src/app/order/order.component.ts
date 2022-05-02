import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  menuList: Menu[] = [];

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void{
    this.menuService.getMenu()
        .subscribe(menu => this.menuList = menu);
  }


}
