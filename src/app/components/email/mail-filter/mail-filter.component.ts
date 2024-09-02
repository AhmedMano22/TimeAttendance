import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-filter',
  templateUrl: './mail-filter.component.html',
  styleUrls: ['./mail-filter.component.scss']
})
export class MailFilterComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }
  // manu open
  openMenu(){
    this.open = !this.open
  }

}
