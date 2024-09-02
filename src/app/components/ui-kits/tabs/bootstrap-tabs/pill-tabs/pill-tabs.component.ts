import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-tabs',
  templateUrl: './pill-tabs.component.html',
  styleUrls: ['./pill-tabs.component.scss']
})
export class PillTabsComponent implements OnInit {
  HomeActive = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
