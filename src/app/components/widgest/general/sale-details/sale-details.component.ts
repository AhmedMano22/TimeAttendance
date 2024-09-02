import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/widgest/general/general'
@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.scss']
})
export class SaleDetailsComponent implements OnInit {
  icon: any
  // data
  public saleDetails = data.saleDetails
  constructor() { }

  ngOnInit(): void {
  }

}
