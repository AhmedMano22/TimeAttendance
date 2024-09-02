import { Component, OnInit } from '@angular/core';
import * as navig from '../../../shared/data/faq/faq'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigation = navig.navigation
  constructor() { }

  ngOnInit(): void {
  }

}
