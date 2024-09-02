import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selling-and-buying',
  templateUrl: './selling-and-buying.component.html',
  styleUrls: ['./selling-and-buying.component.scss']
})
export class SellingAndBuyingComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
