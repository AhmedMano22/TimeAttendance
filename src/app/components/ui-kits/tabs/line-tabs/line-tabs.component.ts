import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-tabs',
  templateUrl: './line-tabs.component.html',
  styleUrls: ['./line-tabs.component.scss']
})
export class LineTabsComponent implements OnInit {

  Primary = "primary"
  Secondary = "secondary"
  constructor() { }

  ngOnInit(): void {
  }

}
