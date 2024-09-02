import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/alert'
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public colorAlert = data.colorAlert
  public colorAlertLight = data.colorAlertLight
  
  constructor() { }

  ngOnInit(): void {
  }

}
