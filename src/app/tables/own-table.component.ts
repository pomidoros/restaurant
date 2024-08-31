import { Component, OnInit } from '@angular/core'
import { TablesService } from './tables.service'
import { ITableOrdersResponse, IResponseStatus, OrdersService } from '../orders/orders.service'

@Component({
  selector: 'app-own-table',
  templateUrl: './own-table.component.html'
})
export class OwnTableComponent implements OnInit {
  public orders: ITableOrdersResponse = []
  public table: string = ''
  public selectedMenuItem: string = ''
  constructor(private tableService: TablesService, private ordersService: OrdersService) {  }
  ngOnInit() {
    this.tableService.waiterTable().subscribe((resp: string) => {
      this.table = resp
      this.ordersService.getTableOrders(resp).subscribe((orders: ITableOrdersResponse) => {
        this.orders = orders
      })
    })
  }
  onCreate() {
    this.ordersService.createOrder({
      table: this.table,
      menu: this.selectedMenuItem
    }).subscribe((resp: IResponseStatus) => {
      if (!resp.error)
        window.location.reload()
    })
  }

  onComplete(order: string) {
    this.ordersService.completeOrder(order).subscribe((resp: IResponseStatus) => {
      if (!resp.error)
        window.location.reload()
    })
  }
}
