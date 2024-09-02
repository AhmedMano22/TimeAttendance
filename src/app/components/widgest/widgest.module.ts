import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgestRoutingModule } from './widgest-routing.module';

import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { EmployeeStatusComponent } from './general/employee-status/employee-status.component';
import { ProductCartComponent } from './general/product-cart/product-cart.component';
import { UsageInBrowserComponent } from './general/usage-in-browser/usage-in-browser.component';
import { ContactUsComponent } from './general/contact-us/contact-us.component';
import { RecentActivityComponent } from './general/recent-activity/recent-activity.component';
import { ProfileComponent } from './general/profile/profile.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExplainComponent } from './general/explain/explain.component';
import { ReviewComponent } from './general/review/review.component';
import { NewOrderComponent } from './general/new-order/new-order.component';
import { LavalCompComponent } from './general/laval-comp/laval-comp.component';
import { SaleDetailsComponent } from './general/sale-details/sale-details.component';
import { OrderDetailsComponent } from './general/order-details/order-details.component';
import { ClockComponent } from './general/clock/clock.component';
import { SocialMediaComponent } from './general/social-media/social-media.component';
import { ChartsComponent } from './chart/charts/charts.component';
import { MarketingExpensesComponent } from './chart/marketing-expenses/marketing-expenses.component';
import { TotalEarningComponent } from './chart/total-earning/total-earning.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { LiveProductsComponent } from './chart/live-products/live-products.component';
import { TurnoverComponent } from './chart/turnover/turnover.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { UserComponent } from './chart/user/user.component';

import {FormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FinanceComponent } from './chart/finance/finance.component';
import { OrderStatus2Component } from './chart/order-status2/order-status2.component';
import { BrowserUsesComponent } from './chart/browser-uses/browser-uses.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CountToModule } from 'angular-count-to';
import { CustomerFeedbackComponent } from './general/customer-feedback/customer-feedback.component';



@NgModule({
  declarations: [
    GeneralComponent,
    ChartComponent,
    ContactUsComponent,
    ExplainComponent,
    EmployeeStatusComponent,
    ProductCartComponent,
    UsageInBrowserComponent,
    RecentActivityComponent,
    ProfileComponent,
    ReviewComponent,
    NewOrderComponent,
    LavalCompComponent,
    SaleDetailsComponent,
    OrderDetailsComponent,
    ClockComponent,
    SocialMediaComponent,
    ChartsComponent,
    MarketingExpensesComponent,
    TotalEarningComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    LiveProductsComponent,
    TurnoverComponent,
    MonthlySalesComponent,
    UserComponent,
    FinanceComponent,
    OrderStatus2Component,
    BrowserUsesComponent,
    CustomerFeedbackComponent,
   
  ],
  imports: [
    CommonModule,
    WidgestRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    NgApexchartsModule,
    AngularSvgIconModule,
    CountToModule 
  ],
  exports: [
    GeneralComponent
  ]
})
export class WidgestModule { }
