import {Component, OnInit} from "@angular/core";
import { ITables, TablesService} from "../tables/tables.service";

@Component({
  selector: 'tables-info',
  templateUrl: './tables-info.component.html'
})
export class TablesInfoComponent implements OnInit {
  public tables: ITables = []
  constructor(private tablesService: TablesService) {}
  ngOnInit() {
    this.tablesService.tables().subscribe((resp: ITables) => {
      this.tables = resp
    })
  }
}
