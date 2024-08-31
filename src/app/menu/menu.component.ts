import { Component, OnInit } from '@angular/core'
import { IMenuResponse, MenuService } from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menu: IMenuResponse = []
  public beverages: IMenuResponse = []
  public dishes: IMenuResponse = []
  public hideMenu: boolean = false
  public hideBeverages: boolean = false
  public hideDishes: boolean = false

  constructor(private menuService: MenuService) { }
  ngOnInit() {
    this.menuService.menu().subscribe((resp: IMenuResponse) => {
      this.menu = resp
    })
    this.menuService.dishes().subscribe((resp: IMenuResponse) => {
      this.dishes = resp
    })
    this.menuService.beverages().subscribe((resp: IMenuResponse) => {
      this.beverages = resp
    })
  }
}
