import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { TokenStorageService } from './auth.storage.service'

@Injectable({
  providedIn: 'root'
})
export class NoauthGuardService implements CanActivate {
  constructor(private storage: TokenStorageService, private router: Router) { }
  canActivate() {
    if (!this.storage.getToken())
      return true
    this.router.navigate(['/'])
    return false
  }
}