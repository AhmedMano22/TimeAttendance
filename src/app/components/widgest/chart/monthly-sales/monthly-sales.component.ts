import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})
export class MonthlySalesComponent implements OnInit {

  salesRadar = chartData.salesRadar
  constructor() { }

  ngOnInit(): void {
  }

}
