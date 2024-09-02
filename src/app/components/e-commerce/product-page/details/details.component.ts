import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  rating = 4 ;
  constructor(public config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
