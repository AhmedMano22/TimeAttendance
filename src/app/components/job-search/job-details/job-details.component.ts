import { Component, OnInit } from '@angular/core';
import { jobDetail } from '../../../shared/data/jon-search/job-serach'
import * as jobs from '../../../shared/data/jon-search/job-serach'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  public jobCard = jobs.jobCards
  public jobCards: any [] = []
  
  constructor(public config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
    this.jobCards = this.jobCard.slice(0,4)
   }

  ngOnInit(): void {
  }

}
