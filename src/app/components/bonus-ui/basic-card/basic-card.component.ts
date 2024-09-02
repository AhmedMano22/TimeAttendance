import { Component, OnInit } from '@angular/core';
import * as cardData from '../../../shared/data/bonus-ui/bonus-ui'
@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  textColor: any
  public cards = cardData.cards
  constructor() { }

  ngOnInit(): void {
  }

}
