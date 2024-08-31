import {Component, OnInit} from "@angular/core";
import {StaffService, TStaffResponse} from "./staff.service";

@Component({
  selector: 'app-staff-info',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  public staff: TStaffResponse = []
  constructor(private staffService: StaffService) {}
  ngOnInit() {
    this.staffService.staffInfo().subscribe((resp: TStaffResponse) => {
      this.staff = resp
    })
  }
}
