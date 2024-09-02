import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-tabs',
  templateUrl: './color-tabs.component.html',
  styleUrls: ['./color-tabs.component.scss']
})
export class ColorTabsComponent implements OnInit {

  @Input() tabs: any
  constructor() { }

  ngOnInit(): void {
  }

}
