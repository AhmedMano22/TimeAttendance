import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-vertical-scroll',
  templateUrl: './vertical-scroll.component.html',
  styleUrls: ['./vertical-scroll.component.scss']
})
export class VerticalScrollComponent implements OnInit {

  constructor() { }

  public configY: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    suppressScrollY:false,
  };
  
  ngOnInit(): void {
  }

}
