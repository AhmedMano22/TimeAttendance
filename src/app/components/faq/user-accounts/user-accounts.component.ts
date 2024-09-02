import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;

 
  constructor() { }

  ngOnInit(): void {
  }

}
