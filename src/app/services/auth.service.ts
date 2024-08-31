import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from "../../environments/environment";
import {TJwtResponse, THttpOptions, ILoginData, ISignupData, ISignupResponse} from "./auth.types";
import {Observable} from "rxjs";

const httpOptions: THttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.api}/auth/login`
  private signupUrl = `${environment.api}/auth/signup`

  constructor(private http: HttpClient) { }
  login(data: ILoginData): Observable<TJwtResponse> {
    return this.http.post<TJwtResponse>(this.loginUrl, data, httpOptions)
  }

  signUp(data: ISignupData): Observable<ISignupResponse> {
    return this.http.post<ISignupResponse>(this.signupUrl, data, httpOptions)
  }
}
