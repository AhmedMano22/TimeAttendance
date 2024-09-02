import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-que-and-ans',
  templateUrl: './quick-que-and-ans.component.html',
  styleUrls: ['./quick-que-and-ans.component.scss']
})
export class QuickQueAndAnsComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
