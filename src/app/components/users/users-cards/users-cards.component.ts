import { Component, OnInit } from '@angular/core';
import * as userData from '../../../shared/data/user/user'
@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit {

  // data
  public userCards = userData.userCards
  constructor() { }

  ngOnInit(): void {
  }

}
