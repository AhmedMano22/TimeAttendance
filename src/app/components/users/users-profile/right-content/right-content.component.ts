import { Component, OnInit } from '@angular/core';
import * as userData from '../../../../shared/data/user/user'

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent implements OnInit {

  public userPost = userData.userPost;
  public userPost2 = userData.userPost2;

  constructor() {
   }

  ngOnInit(): void {
  }

}
