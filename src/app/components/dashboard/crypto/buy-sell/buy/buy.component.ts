import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  show = false
  constructor() { }

  // manu show
  openMenu(){
    this.show = !this.show
  }

  ngOnInit(): void {
  }

}
