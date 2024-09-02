import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-tabs-with-icon',
  templateUrl: './pill-tabs-with-icon.component.html',
  styleUrls: ['./pill-tabs-with-icon.component.scss']
})
export class PillTabsWithIconComponent implements OnInit {
  HomeActive = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
