import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { THttpOptions } from '../services/auth.types'


const httpOptions: THttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

export interface IResponseStatus {
  error: boolean
}

export interface ITableOrder {
  _id: string
  status: string
  menuId: {
    name: string
  }
}

export type ITableOrdersResponse = ITableOrder[]

export interface IOrder {
  _id: string
  status: string
  menuId: {
    name: string
    type: string
  },
  tableId: {
    name: string
  }
}

export type TOrdersResponse = IOrder[]

export interface ICreateOrderReq {
  table: string
  menu: string
}


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private createOrderUrl = `${environment.api}/orders/create`
  private ordersUrl = `${environment.api}/orders/active`
  private tableOrdersUrl = `${environment.api}/tables/orders`
  private acceptOrderUrl = `${environment.api}/staff/maker/accept-order`
  private getOwnOrderUrl = `${environment.api}/staff/maker/order`
  private doneOrderUrl = `${environment.api}/staff/maker/done`
  private completeOrderUrl = `${environment.api}/staff/waiter/complete`

  constructor(private http: HttpClient) { }

  createOrder(data: ICreateOrderReq): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.createOrderUrl, data, httpOptions)
  }

  getTableOrders(table: string): Observable<ITableOrdersResponse> {
    return this.http.post<ITableOrdersResponse>(this.tableOrdersUrl, {table}, httpOptions)
  }

  getOrders(): Observable<TOrdersResponse> {
    return this.http.get<TOrdersResponse>(this.ordersUrl, httpOptions)
  }

  acceptOrder(order: string): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.acceptOrderUrl, {order}, httpOptions)
  }

  getOwnOrder(): Observable<string> {
    return this.http.get<string>(this.getOwnOrderUrl, httpOptions)
  }

  doneOrder(order: string): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.doneOrderUrl, {order}, httpOptions)
  }

  completeOrder(order: string): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.completeOrderUrl, {order}, httpOptions)
  }
}
