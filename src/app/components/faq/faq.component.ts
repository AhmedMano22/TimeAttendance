import { Component, OnInit } from '@angular/core';
import * as faq from '../../shared/data/faq/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqData = faq.faqData

  constructor() { }

  ngOnInit(): void {
  }

}
