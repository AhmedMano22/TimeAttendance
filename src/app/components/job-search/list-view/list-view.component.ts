import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import * as jobs from '../../../shared/data/jon-search/job-serach'
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  public jobCard = jobs.jobCards
  jobCards : any [] = []
  constructor( public config: NgbRatingConfig ) {
    config.max = 5;
    config.readonly = true;
    
    this.jobCards = this.jobCard.slice(0,8)
   }


  ngOnInit(): void {
  }

}
