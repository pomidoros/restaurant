import {Component, OnInit} from "@angular/core";
import {TokenStorageService} from "../services/auth.storage.service";

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isLogin: boolean = false
  constructor(private tokenService: TokenStorageService) {  }
  ngOnInit() {
    this.isLogin = this.tokenService.getToken() != null
  }
}
