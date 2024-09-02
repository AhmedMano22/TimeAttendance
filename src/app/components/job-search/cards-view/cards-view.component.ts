import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import * as jobs from '../../../shared/data/jon-search/job-serach'
@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  public jobCards = jobs.jobCards
  constructor( public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
  }

}
