import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer-dark',
  templateUrl: './footer-dark.component.html',
  styleUrls: ['./footer-dark.component.scss']
})
export class FooterDarkComponent implements OnInit {

  public url$: string
  constructor( private router: Router) { 
    this.url$ = window.location.href
 
    
  }

  

  ngOnInit(): void {
  }

}
