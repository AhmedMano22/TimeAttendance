import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-always-visible-scroll',
  templateUrl: './always-visible-scroll.component.html',
  styleUrls: ['./always-visible-scroll.component.scss']
})
export class AlwaysVisibleScrollComponent implements OnInit {

  constructor() { }

  public configBothSideScroll : PerfectScrollbarConfigInterface ={
    suppressScrollX: false,
  }

  ngOnInit(): void {
  }

}
