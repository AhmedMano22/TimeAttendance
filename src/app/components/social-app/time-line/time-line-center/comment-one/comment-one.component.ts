import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/social-app/social-app'
@Component({
  selector: 'app-comment-one',
  templateUrl: './comment-one.component.html',
  styleUrls: ['./comment-one.component.scss']
})
export class CommentOneComponent implements OnInit {

  replyMassage:any
  public massages = data.massages
  constructor() { }

  ngOnInit(): void {
  }

}
