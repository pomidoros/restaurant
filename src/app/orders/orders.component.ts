import {Component, OnInit} from "@angular/core";
import {IOrder, IResponseStatus, OrdersService, TOrdersResponse} from "./orders.service";
import {TokenStorageService} from "../services/auth.storage.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  public orders: TOrdersResponse = []
  public ownOrder = ''
  constructor(private ordersService: OrdersService, private tokenService: TokenStorageService) { }
  ngOnInit() {
    this.ordersService.getOrders().subscribe((resp: TOrdersResponse) => {
      if (this.tokenService.getRole() == 'cooker')
        this.orders = resp.filter(order => order.menuId.type == 'dish')
      if (this.tokenService.getRole() == 'bartender')
        this.orders = resp.filter(order => order.menuId.type == 'beverage')
    })
    this.ordersService.getOwnOrder().subscribe((resp: string) => {
      this.ownOrder = resp
    })
  }

  acceptOrder(order: string) {
    this.ordersService.acceptOrder(order).subscribe((resp: IResponseStatus) => {
      if (!resp.error)
        window.location.reload()
    })
  }

  doneOrder(order: string) {
      this.ordersService.doneOrder(order).subscribe((resp: IResponseStatus) => {
        if (!resp.error)
          window.location.reload()
      })
  }

}
