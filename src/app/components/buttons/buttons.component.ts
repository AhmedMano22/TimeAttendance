import { Component, OnInit } from '@angular/core';
import { buttons } from '../../shared/data/button/button';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  btns = buttons.defaultButtons
  btns2 = buttons.defaultButtons2
  groupBtn = buttons.buttonsGroup
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
