import { Component, Input, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget'


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  
  
  public bitcoin = chartData.bitcoin;
  public ripple = chartData.ripple;
  public ethereum = chartData.ethereum;
  public litecoin = chartData.litecoin;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
