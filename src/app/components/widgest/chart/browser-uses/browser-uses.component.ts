import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'

@Component({
  selector: 'app-browser-uses',
  templateUrl: './browser-uses.component.html',
  styleUrls: ['./browser-uses.component.scss']
})
export class BrowserUsesComponent implements OnInit {

  public browserCandleStick = chartData.browserCandleStick
  constructor() { }

  ngOnInit(): void {
  }

}
