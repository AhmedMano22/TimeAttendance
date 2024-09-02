import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-ui',
  templateUrl: './breadcrumb-ui.component.html',
  styleUrls: ['./breadcrumb-ui.component.scss']
})
export class BreadcrumbUiComponent implements OnInit {

  breadcrumb = [ "primary", "secondary", "success", "info", "warning", "danger", "light", 'dark']
  constructor() { }

  ngOnInit(): void {
  }

}
