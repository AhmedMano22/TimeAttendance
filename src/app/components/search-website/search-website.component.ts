import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-website',
  templateUrl: './search-website.component.html',
  styleUrls: ['./search-website.component.scss']
})
export class SearchWebsiteComponent {

  public openTab : string = "All";

  constructor() { }

  public tabbed(val: string) {
  	this.openTab = val
  }
  

}
