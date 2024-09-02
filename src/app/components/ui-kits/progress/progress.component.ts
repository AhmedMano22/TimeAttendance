import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/progress'
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  public largeProgressBars = data.largeProgressBars

  constructor() { }

  ngOnInit(): void {
  }

}
