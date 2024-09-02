import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-tabs',
  templateUrl: './bootstrap-tabs.component.html',
  styleUrls: ['./bootstrap-tabs.component.scss']
})
export class BootstrapTabsComponent implements OnInit {
  TopActive = 'top';
  HomeActive = 'home';
  HomeActive8 = 'home';

  Primary = "primary"
  Secondary = "secondary"
  Success = "success"
  Info = "info"
  Warning = "warning"
  Danger = "danger"
  constructor() { }

  ngOnInit(): void {
  }

}



