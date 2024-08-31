import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {THttpOptions} from "../services/auth.types";
import {Observable} from "rxjs";

export interface IMenuItem {
  _id: string
  type: 'dish' | 'beverage',
  price: {
    eur: number,
    cents: number
  },
  name: string,
}

export type IMenuResponse = IMenuItem[]

const httpOptions: THttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = `${environment.api}/menu`
  private beveragesUrl = `${environment.api}/menu/beverages`
  private dishesUrl = `${environment.api}/menu/dishes`

  constructor(private http: HttpClient) { }

  menu(): Observable<IMenuResponse> {
    return this.http.get<IMenuResponse>(this.menuUrl, httpOptions)
  }

  beverages(): Observable<IMenuResponse> {
    return this.http.get<IMenuResponse>(this.beveragesUrl, httpOptions)
  }

  dishes(): Observable<IMenuResponse> {
    return this.http.get<IMenuResponse>(this.dishesUrl, httpOptions)
  }
}
