import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-intro',
  templateUrl: './profile-intro.component.html',
  styleUrls: ['./profile-intro.component.scss']
})
export class ProfileIntroComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
