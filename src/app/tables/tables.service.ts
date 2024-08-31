import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {THttpOptions} from "../services/auth.types";
import {Observable} from "rxjs";

export interface ITable {
  _id: string,
  name: string,
  occupied: boolean
  seats: number,
  orders: number,
  completedOrders: number,
  income: number
}

export interface IHasTableResponse {
  answer: boolean
}

export type ITables = ITable[]

const httpOptions: THttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

export interface IResponseStatus {
  error: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private tablesUrl = `${environment.api}/tables`
  private acceptTableUrl = `${environment.api}/staff/waiter/accept-table`
  private getTableUrl = `${environment.api}/staff/waiter/table`
  private completeTableUrl = `${environment.api}/staff/waiter/complete-table`
  private tablesIncomeUrl = `${environment.api}/tables/info`

  constructor(private http: HttpClient) { }

  tables(): Observable<ITables> {
    return this.http.get<ITables>(this.tablesUrl, httpOptions)
  }

  acceptTable(table: string): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.acceptTableUrl, {table}, httpOptions)
  }

  waiterTable(): Observable<string> {
    return this.http.get<string>(this.getTableUrl, httpOptions)
  }

  completeTable(): Observable<IResponseStatus> {
    return this.http.put<IResponseStatus>(this.completeTableUrl, {}, httpOptions)
  }
}
