import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'

@Component({
  selector: 'app-hoverable-rows',
  templateUrl: './hoverable-rows.component.html',
  styleUrls: ['./hoverable-rows.component.scss']
})
export class HoverableRowsComponent implements OnInit {
  public table = data.table

  constructor() { }

  ngOnInit(): void {
  }

}
