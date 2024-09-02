import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss']
})
export class LearningFilterComponent implements OnInit {

  OpenFilter: boolean = false
  constructor() { 
    
  }

  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
  ngOnInit(): void {
  }

}
