import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import { productList } from 'src/app/shared/interface/product';
import { ProductListDirective, SortEvent } from 'src/app/shared/directive/product-list.directive';
import * as data from '../../../shared/data/e-commerce/product-list'
import { ProductListService } from 'src/app/shared/services/product/product-list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$: Observable<productList[]>;
  total$: Observable<number>;

  public PRODUCTLIST = data.PRODUCTLIST 

  @ViewChildren(ProductListDirective) headers: QueryList<ProductListDirective>;

  constructor(public service: ProductListService) {
    this.products$ = service.orderList$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
