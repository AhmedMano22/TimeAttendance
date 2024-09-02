import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagination = ["primary", "secondary", "success", "info", "warning", "danger" ]
  constructor() { }

  ngOnInit(): void {
  }

}
