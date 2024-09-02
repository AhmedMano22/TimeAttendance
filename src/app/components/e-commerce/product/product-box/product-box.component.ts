import { ChangeDetectorRef, Component, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { Products } from 'src/app/shared/model/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxFilterService } from 'src/app/shared/services/product/product-box-filter.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  @Output() productDetail: any;

  product!: string;
  listData: Products[] = []

  sidebaron: boolean = false;
  show: boolean = false;
  open: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;
  
  constructor( private ProductService:ProductService, private modalService: NgbModal, private ProductBoxFilterService: ProductBoxFilterService, private cd : ChangeDetectorRef, public config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
   }
    
    openMediaFilter() {
      if (this.show == false && this.sidebaron == false && this.open == false) {
        this.show = true
        this.sidebaron = true
        this.open = true
      } else {
        this.show = false
        this.sidebaron = false
        this.open = false
      }
    }
  
  openProductDetail(content:any, id: number) {
    
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.ProductService.getProduct(id).subscribe((product) => {
      this.productDetail = product && product;
    });
  }

  ngOnInit() {
    this.ProductService.products().subscribe((data)=>{
      this.listData = data;
     })
  }

  ngDoCheck(){
    this.col_xl_12 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_2 = this.ProductBoxFilterService.col_xl_2; 
    this.col_sm_3 = this.ProductBoxFilterService.col_sm_3;
    this.col_xl_3= this.ProductBoxFilterService.col_xl_3;
    this.xl_4 = this.ProductBoxFilterService.xl_4
    this.col_xl_4 = this.ProductBoxFilterService.col_xl_4;
    this.col_sm_4 = this.ProductBoxFilterService.col_sm_4;

    this.col_sm_6 = this.ProductBoxFilterService.col_sm_6;
    this.col_xl_6 = this.ProductBoxFilterService.col_xl_6;
        
  }


}
