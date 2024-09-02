import { Component, OnInit } from "@angular/core";
import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-chart2",
  templateUrl: "./chart2.component.html",
  styleUrls: ["./chart2.component.scss"],
})
export class Chart2Component implements OnInit {
  public chart2 = chartData.chart2;

  constructor() {}

  ngOnInit(): void {}
}
