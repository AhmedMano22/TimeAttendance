import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/e-commerce/invoice'

@Component({
  selector: 'app-invoice-data-table',
  templateUrl: './invoice-data-table.component.html',
  styleUrls: ['./invoice-data-table.component.scss']
})
export class InvoiceDataTableComponent implements OnInit {

  // data
  public invoice = data.invoice

  constructor() { }

  ngOnInit(): void {
  }

}
