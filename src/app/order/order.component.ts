import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  menuList: Menu[] = [];
  maxCount: number = 9;
  minCount: number = 0;
  orderValue: number = 0;
  orderCurrency: string = "zł";

  constructor(private menuService: MenuService) { }


  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void{
    this.menuService.getMenu()
        .subscribe(menu => this.menuList = menu);
  }

  incrementCount(index: number){
    const item = this.menuList[index];
    item.count += 1;
    this.orderValue += this.menuList[index].price;
  }
  decrementCount(index: number){
    const item = this.menuList[index];
    item.count -= 1;
    this.orderValue -= this.menuList[index].price;
  }

}
