import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-color',
  templateUrl: './primary-color.component.html',
  styleUrls: ['./primary-color.component.scss']
})
export class PrimaryColorComponent implements OnInit {
  HomeActive8 = 'home';

  @Input() tabs:any

  constructor() { }

  ngOnInit(): void {
  }

}
