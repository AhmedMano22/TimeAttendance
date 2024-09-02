import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-vertical',
  templateUrl: './tabs-vertical.component.html',
  styleUrls: ['./tabs-vertical.component.scss']
})
export class TabsVerticalComponent implements OnInit {
  TopActive = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}
