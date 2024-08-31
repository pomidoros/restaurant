import { Injectable } from '@angular/core'


const TOKEN_KEY = 'AuthToken'
const USERNAME_KEY = 'AuthUsername'
const ROLE_KEY = 'AuthRole'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut() {
    window.sessionStorage.clear()
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getUsername(): string | null {
    return window.sessionStorage.getItem(USERNAME_KEY)
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY)
    window.sessionStorage.setItem(USERNAME_KEY, username)
  }

  public getRole(): string | null {
    return window.sessionStorage.getItem(ROLE_KEY)
  }

  public saveRole(role: string) {
    window.sessionStorage.removeItem(ROLE_KEY)
    window.sessionStorage.setItem(ROLE_KEY, role)
  }
}
