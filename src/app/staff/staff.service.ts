import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {THttpOptions} from "../services/auth.types";
import {environment} from "../../environments/environment";

interface IStaff {
  username: string,
  role: string,
  serviced: number
}

export type TStaffResponse = IStaff[]


const httpOptions: THttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staffInfoUrl = `${environment.api}/staff/cashier/staff-info`
  constructor(private http: HttpClient) { }

  staffInfo(): Observable<TStaffResponse> {
    return this.http.get<TStaffResponse>(this.staffInfoUrl, httpOptions)
  }
}
