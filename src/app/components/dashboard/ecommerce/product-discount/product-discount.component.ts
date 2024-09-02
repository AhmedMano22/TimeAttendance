import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/components/dashboard/ecommerce";
@Component({
  selector: "app-product-discount",
  templateUrl: "./product-discount.component.html",
  styleUrls: ["./product-discount.component.scss"],
})
export class ProductDiscountComponent implements OnInit {
  seconds: number;
  interval: any;

  // data
  public discount = data.discount;
  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(function (this: any) {
      let countDown = new Date("Sep 30, 2024 00:00:00").getTime();
      let now = new Date().getTime();
      let distance = countDown - now;
      this.document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // owl carosel
  owlcarousel1Options = {
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
