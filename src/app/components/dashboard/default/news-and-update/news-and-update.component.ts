import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/dashboard/default'
@Component({
  selector: 'app-news-and-update',
  templateUrl: './news-and-update.component.html',
  styleUrls: ['./news-and-update.component.scss']
})
export class NewsAndUpdateComponent implements OnInit {

  public NewsAndUpdate = data.NewsAndUpdate
  
  constructor() { }

  ngOnInit(): void {
  }

}
