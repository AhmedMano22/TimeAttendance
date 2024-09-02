import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrls: ['./to-do-filter.component.scss']
})
export class ToDoFilterComponent implements OnInit {
  public open = false;

  constructor() { }

  openMenu(){
    this.open = !this.open
  }
  ngOnInit(): void {
  }

}
