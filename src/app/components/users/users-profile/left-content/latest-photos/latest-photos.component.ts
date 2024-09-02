import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-photos',
  templateUrl: './latest-photos.component.html',
  styleUrls: ['./latest-photos.component.scss']
})
export class LatestPhotosComponent implements OnInit {
  public isProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

}
