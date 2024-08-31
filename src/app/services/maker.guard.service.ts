import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { TokenStorageService } from './auth.storage.service'

@Injectable({
  providedIn: 'root'
})
export class MakerGuardService implements CanActivate {
  constructor(private storage: TokenStorageService, private router: Router) { }
  canActivate() {
    if (this.storage.getToken() && (this.storage.getRole() == 'cooker' || this.storage.getRole() == 'bartender'))
      return true
    this.router.navigate([''])
    return false
  }
}
