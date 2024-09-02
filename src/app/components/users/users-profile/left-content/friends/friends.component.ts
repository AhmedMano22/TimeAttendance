import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fri',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public isProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

}
