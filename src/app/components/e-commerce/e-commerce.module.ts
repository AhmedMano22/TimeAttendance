import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';

import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { BillingDetailComponent } from './checkout/billing-detail/billing-detail.component';
import { PlaceOrderComponent } from './checkout/place-order/place-order.component';
import { CreditCardComponent } from './payment-details/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-details/debit-card/debit-card.component';
import { CodComponent } from './payment-details/cod/cod.component';
import { EmiComponent } from './payment-details/emi/emi.component';
import { NetBankingComponent } from './payment-details/net-banking/net-banking.component';
import { DescriptionTabComponent } from './product-page/description-tab/description-tab.component';
import { BrandComponent } from './product-page/brand/brand.component';
import { DetailsComponent } from './product-page/details/details.component';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule} from 'ngx-print';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxDropzoneModule } from 'ngx-dropzone';

import 'mousetrap';
import 'hammerjs';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { ProductListService } from 'src/app/shared/services/product/product-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryService } from 'src/app/shared/services/product/order-history.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DescriptionCategoryComponent } from './add-product/description-category/description-category.component';
import { SizeImageComponent } from './add-product/size-image/size-image.component';
import { InvoiceDataTableComponent } from './invoice/invoice-data-table/invoice-data-table.component';
import { OrderHistoryDirective } from 'src/app/shared/directive/order-history.directive';


@NgModule({
  declarations: [
    ProductComponent,
    ProductPageComponent,
    ProductListComponent,
    InvoiceComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    PricingComponent,
    FilterComponent,
    ProductBoxComponent,
    QuickViewComponent,
    PaymentDetailsComponent,
    BillingDetailComponent,
    PlaceOrderComponent,
    CreditCardComponent,
    DebitCardComponent,
    CodComponent,
    EmiComponent,
    NetBankingComponent,
    DescriptionTabComponent,
    BrandComponent,
    DetailsComponent,
    InvoiceDataTableComponent,
    OrderHistoryComponent,
    AddProductComponent,
    DescriptionCategoryComponent,
    SizeImageComponent,
    // ProductListDirective
    OrderHistoryDirective,
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    GalleryModule,
    NgxPrintModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers:[
    NgbActiveModal,
    ProductService,
    ProductListService,
    OrderHistoryService
  ],
  exports:[
    ProductBoxComponent,
    ProductPageComponent,

  ]
})
export class ECommerceModule { }
