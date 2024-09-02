import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-area-spaline',
  templateUrl: './area-spaline.component.html',
  styleUrls: ['./area-spaline.component.scss']
})
export class AreaSpalineComponent implements OnInit {

  public areaSpalineChart = chartData.areaSpalineChart

  constructor() { }

  ngOnInit(): void {
  }

}
