import { Component, OnInit } from '@angular/core';
import * as generalData from '../../../../shared/data/components/widgest/general/general'

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss']
})
export class EmployeeStatusComponent implements OnInit {

  public employeeStatusData = generalData.employeeStatusData 
  constructor() { }

  ngOnInit(): void {
  }

}
