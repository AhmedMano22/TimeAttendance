import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBookmarkComponent } from './model/add-bookmark/add-bookmark.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}
