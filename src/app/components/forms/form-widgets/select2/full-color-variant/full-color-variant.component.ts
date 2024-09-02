import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-color-variant',
  templateUrl: './full-color-variant.component.html',
  styleUrls: ['./full-color-variant.component.scss']
})
export class FullColorVariantComponent implements OnInit {
  
  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]

  constructor() { }

  ngOnInit(): void {
  }

}
