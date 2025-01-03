import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { OverlayModule } from "@angular/cdk/overlay";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { LoginComponent } from "./auth/login/login.component";
// for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
// // for Router import:
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
// // for Core import:
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AdminGuard } from "./shared/guard/admin.guard";
import { LightboxModule } from "@ngx-gallery/lightbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./shared/interceptor/token-interceptor.service";
// import { SelectDropDownModule } from 'ngx-select-dropdown'

@NgModule({
  declarations: [AppComponent, ButtonsComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    OverlayModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    BrowserAnimationsModule,
    LightboxModule,
    ToastrModule.forRoot(),
    NgxIntlTelInputModule,
    // SelectDropDownModule
  ],
  providers: [AdminGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
