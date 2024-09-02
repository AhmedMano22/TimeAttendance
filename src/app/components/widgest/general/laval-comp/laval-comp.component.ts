import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-laval-comp',
  templateUrl: './laval-comp.component.html',
  styleUrls: ['./laval-comp.component.scss']
})
export class LavalCompComponent implements OnInit {

  @Input() data: any

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
