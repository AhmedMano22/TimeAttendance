import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/dropdown'
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public basicColorDropdown = data.basicColorDropdown
  constructor() { }

  ngOnInit(): void {
  }

}
