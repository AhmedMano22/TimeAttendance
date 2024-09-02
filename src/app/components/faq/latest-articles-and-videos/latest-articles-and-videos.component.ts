import { Component, OnInit } from '@angular/core';
import * as latest from '../../../shared/data/faq/faq'
@Component({
  selector: 'app-latest-articles-and-videos',
  templateUrl: './latest-articles-and-videos.component.html',
  styleUrls: ['./latest-articles-and-videos.component.scss']
})
export class LatestArticlesAndVideosComponent implements OnInit {

  public articlesAndVideos = latest.articlesAndVideos
  constructor() { }

  ngOnInit(): void {
  }

}
