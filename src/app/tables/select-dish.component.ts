import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {IMenuItem, IMenuResponse, MenuService} from "../menu/menu.service";

@Component({
  selector: 'app-select-dish',
  templateUrl: './select-dish.component.html'
})
export class SelectDishComponent implements OnInit {
  @Input() selected: string = ''
  @Output() selectedChange = new EventEmitter<string>()
  public menu: IMenuResponse = []
  constructor(private menuService: MenuService) {  }
  ngOnInit() {
    this.menuService.menu().subscribe((resp: IMenuResponse) => {
      this.menu = resp
    })
  }
  onChange(value: string) {
    this.selected = value
    this.selectedChange.emit(this.selected)
  }
}
