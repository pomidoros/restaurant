import {HttpHeaders} from '@angular/common/http'

export interface THttpOptions {
  headers: HttpHeaders
}

interface IJwtResponseSuccess {
  isAuth: true,
  token: string,
  role: string,
  username: string
}

interface IJwtResponseError {
  isAuth: false
  msg?: string
}

export type TJwtResponse = IJwtResponseSuccess | IJwtResponseError

export interface ILoginData {
  username: string,
  password: string
}

export interface ISignupData {
  username: string,
  password: string,
  role: string
}


export interface ISignupResponse {
  status: boolean
  msg?: string
}
