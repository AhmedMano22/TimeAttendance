import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {
  }

  cartItem = [
    {
      productImg: "assets/images/ecommerce/product-table-3.png",
      productName: "Long Top",
      price: 21,
      total: 12456
    },
    {
      productImg: "assets/images/ecommerce/product-table-2.png",
      productName: "Man's Jacket",
      price: 50,
      total: 12456
    },
    {
      productImg: "assets/images/ecommerce/product-table-4.png",
      productName: "Women Skirt",
      price: 11,
      total: 12456
    },
  ]
}
