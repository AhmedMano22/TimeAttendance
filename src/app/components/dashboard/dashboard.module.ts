import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CryptoComponent } from "./crypto/crypto.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";
import { DefaultComponent } from "./default/default.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GetStartedComponent } from "./default/get-started/get-started.component";
import { TodayEarningComponent } from "./default/today-earning/today-earning.component";
import { WeeklyChartComponent } from "./default/weekly-chart/weekly-chart.component";
import { NewsAndUpdateComponent } from "./default/news-and-update/news-and-update.component";
import { RecentActivityComponent } from "./default/recent-activity/recent-activity.component";
import { TotalTransactionsComponent } from "./default/total-transactions/total-transactions.component";
import { YearlyChartComponent } from "./default/yearly-chart/yearly-chart.component";
import { OngoingProjectComponent } from "./default/ongoing-project/ongoing-project.component";
import { PremiumAccessComponent } from "./default/premium-access/premium-access.component";
import { SalesStatsComponent } from "./ecommerce/sales-stats/sales-stats.component";
import { InvoiceOverviewComponent } from "./ecommerce/invoice-overview/invoice-overview.component";
import { HotSellingProductsComponent } from "./ecommerce/hot-selling-products/hot-selling-products.component";
import { RecentOrdersComponent } from "./ecommerce/recent-orders/recent-orders.component";
import { OurActivitiesComponent } from "./ecommerce/our-activities/our-activities.component";
import { RevenueByCategoryComponent } from "./ecommerce/revenue-by-category/revenue-by-category.component";
import { ProductDiscountComponent } from "./ecommerce/product-discount/product-discount.component";
import { TotalSaleComponent } from "./ecommerce/total-sale/total-sale.component";
import { SupportComponent } from "./ecommerce/support/support.component";
import { TradingActivitiesComponent } from "./crypto/trading-activities/trading-activities.component";
import { NotificationComponent } from "./crypto/notification/notification.component";
import { ChatComponent } from "./crypto/chat/chat.component";
import { CandlestickChartTotalComponent } from "./crypto/candlestick-chart-total/candlestick-chart-total.component";
import { BuySellComponent } from "./crypto/buy-sell/buy-sell.component";
import { ChartDataComponent } from "./crypto/chart-data/chart-data.component";
import { CoinComponent } from "./crypto/coin/coin.component";
import { SellComponent } from "./crypto/buy-sell/sell/sell.component";
import { BuyComponent } from "./crypto/buy-sell/buy/buy.component";

import { ChartistModule } from "ng-chartist";

@NgModule({
  declarations: [
    CryptoComponent,
    EcommerceComponent,
    DefaultComponent,
    GetStartedComponent,
    TodayEarningComponent,
    WeeklyChartComponent,
    NewsAndUpdateComponent,
    RecentActivityComponent,
    TotalTransactionsComponent,
    YearlyChartComponent,
    OngoingProjectComponent,
    PremiumAccessComponent,
    SalesStatsComponent,
    InvoiceOverviewComponent,
    HotSellingProductsComponent,
    RecentOrdersComponent,
    OurActivitiesComponent,
    RevenueByCategoryComponent,
    ProductDiscountComponent,
    TotalSaleComponent,
    SupportComponent,
    TradingActivitiesComponent,
    NotificationComponent,
    ChatComponent,
    CandlestickChartTotalComponent,
    BuySellComponent,
    ChartDataComponent,
    CoinComponent,
    SellComponent,
    BuyComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, CarouselModule, NgApexchartsModule, NgbModule, ChartistModule],
})
export class DashboardModule {}
