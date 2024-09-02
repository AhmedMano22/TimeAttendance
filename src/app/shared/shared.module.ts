import { NgModule } from "@angular/core";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/header/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import { NavService } from "./services/nav.service";
import { FeatherIconComponent } from "./components/feather-icon/feather-icon.component";
import { RouterModule } from "@angular/router";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BookmarkComponent } from "./components/header/header/bookmark/bookmark.component";
import { CartComponent } from "./components/header/header/cart/cart.component";
import { NotificationComponent } from "./components/header/header/notification/notification.component";
import { MaximizeComponent } from "./components/header/header/maximize/maximize.component";
import { AccountComponent } from "./components/header/header/account/account.component";
import { ModeComponent } from "./components/header/header/mode/mode.component";
import { ProductService } from "./services/product/product.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomizerComponent } from "./components/customizer/customizer.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { FullComponent } from "./components/layout/full/full.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ProductBoxFilterService } from "./services/product/product-box-filter.service";
import { SupportTicketService } from "./services/support-ticket/support-ticket.service";
import { DecimalPipe } from "@angular/common";
import { SearchComponent } from "./components/header/header/search/search.component";
import { ColorComponent } from "./components/customizer/color/color.component";
import { LayoutSettingComponent } from "./components/customizer/layout-setting/layout-setting.component";
import { SearchCustomizeComponent } from "./components/header/header/search-customize/search-customize.component";
import { CrudListComponent } from "./components/crud-list/crud-list.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { CountToDirective, CountToModule } from "angular-count-to";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { Title } from "@angular/platform-browser";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../../assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FeatherIconComponent,
    BreadcrumbComponent,
    TapToTopComponent,
    FooterComponent,
    BookmarkComponent,
    CartComponent,
    NotificationComponent,
    MaximizeComponent,
    AccountComponent,
    ModeComponent,
    CustomizerComponent,
    LoaderComponent,
    FullComponent,
    SearchComponent,
    ColorComponent,
    LayoutSettingComponent,
    SearchCustomizeComponent,
    CrudListComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularSvgIconModule.forRoot(),
    NgApexchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    NavService,
    ProductService,
    ProductBoxFilterService,
    SupportTicketService,
    DecimalPipe,
    NgTemplateOutlet,
  ],
  exports: [
    RouterModule,
    BreadcrumbComponent,
    TapToTopComponent,
    FeatherIconComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CustomizerComponent,
    LoaderComponent,
    NgbModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CrudListComponent,
    NgSelectModule,
    CountToModule,
    NgApexchartsModule,
    TranslateModule,
    SpinnerComponent,
  ],
})
export class SharedModule {
  // constructor(private translate:TranslateService) {
  //   const lang = localStorage.getItem('lang');
  //     if(lang !== null) {
  //       translate.use(lang);
  //     }
  //     else translate.use('ar');
  // }
  constructor(
    private translateService: TranslateService,
    private titleService: Title
  ) {
    const appLang = localStorage.getItem("app-lang") ?? "ar";
    this.translateService.setDefaultLang("ar");
    this.translateService.use(appLang);

    this.translateService.onLangChange.subscribe((event) => {
      document.documentElement.dir = event.lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = event.lang;
      localStorage.setItem("app-lang", event.lang);
      // const translatedTitle = this.translateService.instant("app.title");
      // this.titleService.setTitle(translatedTitle);
    });
  }
}
