import { Component, OnInit } from "@angular/core";
import * as chart from "../../../../shared/data/widget/widget";
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: "app-sales-stats",
  templateUrl: "./sales-stats.component.html",
  styleUrls: ["./sales-stats.component.scss"],
})
export class SalesStatsComponent implements OnInit {
  // chart data
  public sale = chart.sale;
  public smallColumnChart1  = chartData.smallColumnChart1
  public smallColumnChart2  = chartData.smallColumnChart2
  public smallColumnChart3  = chartData.smallColumnChart3

  constructor() {}

  ngOnInit(): void {}
}
