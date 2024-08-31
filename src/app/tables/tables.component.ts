import { Component, OnInit } from '@angular/core'
import {IHasTableResponse, IResponseStatus, ITable, ITables, TablesService} from './tables.service'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
  public tables: ITables = []
  public curTable: string = ''
  constructor(private tablesService: TablesService) { }
  ngOnInit() {
    this.tablesService.tables().subscribe((resp: ITables) => {
      this.tables = resp
    })
    this.tablesService.waiterTable().subscribe((resp: string) => {
      this.curTable = resp
    })
  }

  acceptTable(table: string) {
    this.tablesService.acceptTable(table).subscribe((resp: IResponseStatus) => {
      if (!resp.error)
        window.location.reload()
    })
  }

  completeTable() {
    this.tablesService.completeTable().subscribe((resp: IResponseStatus) => {
      if (!resp.error)
        window.location.reload()
    })
  }
}
