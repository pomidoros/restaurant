import {Component, Input} from "@angular/core";
import {IMenuResponse} from "./menu.service";

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  @Input() menu: IMenuResponse = []
  @Input() title: string = ''
  public hideMenu: boolean = false
}
