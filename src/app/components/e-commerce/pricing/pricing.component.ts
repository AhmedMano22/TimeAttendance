import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/e-commerce/pricing'
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  public simplePricingCard = data.simplePricingCard
  public pricing = data.pricing
  constructor() { }

  ngOnInit(): void {
  }

}
