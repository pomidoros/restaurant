import { Injectable } from '@angular/core'
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/auth.storage.service";
import {Router} from "@angular/router";
import {ILoginData, ISignupData, ISignupResponse, TJwtResponse} from "../services/auth.types";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: AuthService, private storage: TokenStorageService, private router: Router) { }

  login(data: ILoginData) {
    this.auth.login(data).subscribe((res: TJwtResponse) => {
      if (res.isAuth) {
        this.storage.saveToken(res.token)
        this.storage.saveRole(res.role)
        this.storage.saveUsername(res.username)
        this.reload()
      }
    })
  }

  signup(data: ISignupData) {
    this.auth.signUp(data).subscribe((resp: ISignupResponse) => {
      this.router.navigate(['login'])
    })
  }

  logout() {
    this.storage.signOut()
    this.reload()
  }

  reload() {
    window.location.reload()
  }
}
