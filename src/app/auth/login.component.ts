import {Component, OnInit} from '@angular/core'
import {FormControl, Validators} from "@angular/forms";
import {ILoginData, ISignupData} from "../services/auth.types";
import {UserService} from "./user.service";


@Component({
  selector: 'page-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public nameControl: FormControl = new FormControl<string>('')
  public passwordControl: FormControl = new FormControl<string>('')
  public nameError: string = ''
  public passwordError: string = ''
  constructor(private user: UserService) { }
  ngOnInit() {
    this.nameControl = new FormControl<string>('', [Validators.required])
    this.nameControl.statusChanges.subscribe((status) => {
      if (status == 'INVALID') this.nameError = 'Empty name'
    })
    this.passwordControl = new FormControl<string>('', [Validators.required])
    this.passwordControl.statusChanges.subscribe((status) => {
      if (status == 'INVALID') this.passwordError = 'Empty password'
    })
  }
  onSubmit() {
    if (this.nameControl.status != 'INVALID' && this.passwordControl.status != 'INVALID') {
      let data: ILoginData = {
        username: this.nameControl.value,
        password: this.passwordControl.value
      }
      this.user.login(data)
    }
  }
}
