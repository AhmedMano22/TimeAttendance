import { Component, OnInit } from '@angular/core';
import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  imagesRect: Image[] = [
    new Image(0, { img: 'assets/images/ecommerce/01.jpg' }, { img: 'assets/images/ecommerce/01.jpg' }),
    new Image(1, { img: 'assets/images/ecommerce/04.jpg' }, { img: 'assets/images/ecommerce/04.jpg' }),
    new Image(2, { img: 'assets/images/ecommerce/03.jpg' }, { img: 'assets/images/ecommerce/03.jpg' }),
    new Image(3, { img: 'assets/images/ecommerce/05.jpg' }, { img: 'assets/images/ecommerce/05.jpg' }),]
  constructor() { }


  ngOnInit(): void {
  }

}
