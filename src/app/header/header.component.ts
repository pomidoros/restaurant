import {Component, OnInit} from '@angular/core'
import { TokenStorageService } from '../services/auth.storage.service'
import {CommonModule, NgForOf} from "@angular/common";
import {UserService} from "../auth/user.service";

interface IPageLink {
  title: string
  url: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public pageLinks: IPageLink[] = []
  public isLog: boolean = false
  constructor(private storage: TokenStorageService, private user: UserService) { }
  ngOnInit() {
    this.isLog = this.storage.getToken() != null
    if (this.storage.getToken()) {
      switch (this.storage.getRole()) {
        case 'cashier':
          this.pageLinks = [
            {
              title: 'Staff',
              url: '/staff'
            },
            {
              title: 'Tables Info',
              url: '/tables-info'
            }
          ]
          break
        case 'waiter':
          this.pageLinks = [
            {
              title: 'Tables',
              url: '/tables'
            },
            {
              title: 'Own Table',
              url: '/table/own-table'
            }
          ]
          break
        case 'cooker':
          this.pageLinks = [
            {
              title: 'Orders',
              url: '/orders'
            }
          ]
          break
        case 'bartender':
          this.pageLinks = [
            {
              title: 'Orders',
              url: '/orders'
            }
          ]
          break
        default:
          break
      }
    }
  }
  logout() {
    this.user.logout()
  }
}
