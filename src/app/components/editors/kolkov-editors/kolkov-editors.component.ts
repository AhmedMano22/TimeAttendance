import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kolkov-editors',
  templateUrl: './kolkov-editors.component.html',
  styleUrls: ['./kolkov-editors.component.scss']
})
export class KolkovEditorsComponent implements OnInit {
  public htmlContent = '';

  constructor() { }
  ngOnInit(): void {
  }

}
