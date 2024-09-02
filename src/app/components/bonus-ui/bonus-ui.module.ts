import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BonusUiRoutingModule } from "./bonus-ui-routing.module";
import { ScrollableComponent } from "./scrollable/scrollable.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { RatingComponent } from "./rating/rating.component";
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { TourComponent } from "./tour/tour.component";
import { SweetAlert2Component } from "./sweet-alert2/sweet-alert2.component";
import { OwlCarouselComponent } from "./owl-carousel/owl-carousel.component";
import { RibbonsComponent } from "./ribbons/ribbons.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { BreadcrumbUiComponent } from "./breadcrumb-ui/breadcrumb-ui.component";
import { StepsComponent } from "./steps/steps.component";
import { RangSliderComponent } from "./rang-slider/rang-slider.component";
import { ImageCropperComponent } from "./image-cropper/image-cropper.component";
import { StickyComponent } from "./sticky/sticky.component";
import { BasicCardComponent } from "./basic-card/basic-card.component";
import { DraggableCardComponent } from "./draggable-card/draggable-card.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";
import { UsersModule } from "../users/users.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { Timeline1Component } from "./timeline1/timeline1.component";
import { NgxDropzoneModule } from "ngx-dropzone";

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TreeModule } from "@circlon/angular-tree-component";
import { ImageCropperModule } from "ngx-image-cropper";
import { PaginationIconsComponent } from "./pagination/pagination-icons/pagination-icons.component";
import { PaginationAlignmentComponent } from "./pagination/pagination-alignment/pagination-alignment.component";
import { PaginationActiveDisabledComponent } from "./pagination/pagination-active-disabled/pagination-active-disabled.component";
import { PaginationColorComponent } from "./pagination/pagination-color/pagination-color.component";
import { PaginationSizingComponent } from "./pagination/pagination-sizing/pagination-sizing.component";
import { DefaultPearlsStepsComponent } from "./steps/default-pearls-steps/default-pearls-steps.component";
import { DefaultStepComponent } from "./steps/default-step/default-step.component";
import { PearlsStepSizingComponent } from "./steps/pearls-step-sizing/pearls-step-sizing.component";
import { PearlsStepStatesComponent } from "./steps/pearls-step-states/pearls-step-states.component";
import { StepSizingComponent } from "./steps/step-sizing/step-sizing.component";
import { StepStatesComponent } from "./steps/step-states/step-states.component";
import { VerticalStepComponent } from "./steps/vertical-step/vertical-step.component";
import { PearlsStepIconComponent } from "./steps/pearls-step-icon/pearls-step-icon.component";
import { StepIconComponent } from "./steps/step-icon/step-icon.component";
import { DragulaModule } from "ng2-dragula";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CardWithBorderComponent } from "./basic-card/card-with-border/card-with-border.component";
import { FaqModule } from "../faq/faq.module";
import { CardWithTabComponent } from "./basic-card/card-with-tab/card-with-tab.component";
import { ProfileCardsComponent } from "./basic-card/profile-cards/profile-cards.component";
import { BlogCardsComponent } from "./basic-card/blog-cards/blog-cards.component";
import { HorizontalCardComponent } from "./basic-card/horizontal-card/horizontal-card.component";
import { BasicOwlComponent } from "./owl-carousel/basic-owl/basic-owl.component";
import { ResponsiveOwlComponent } from "./owl-carousel/responsive-owl/responsive-owl.component";
import { CenterOwlComponent } from "./owl-carousel/center-owl/center-owl.component";
import { MergeOwlComponent } from "./owl-carousel/merge-owl/merge-owl.component";
import { AutoWidthOwlComponent } from "./owl-carousel/auto-width-owl/auto-width-owl.component";
import { NavigationsOwlComponent } from "./owl-carousel/navigations-owl/navigations-owl.component";
import { EventsOwlComponent } from "./owl-carousel/events-owl/events-owl.component";
import { StagePaddingOwlComponent } from "./owl-carousel/stage-padding-owl/stage-padding-owl.component";
import { RightToLeftOwlComponent } from "./owl-carousel/right-to-left-owl/right-to-left-owl.component";
import { LazyLoadOwlComponent } from "./owl-carousel/lazy-load-owl/lazy-load-owl.component";
import { AnimateOwlComponent } from "./owl-carousel/animate-owl/animate-owl.component";
import { AutoPlayOwlComponent } from "./owl-carousel/auto-play-owl/auto-play-owl.component";
import { AutoHeightOwlComponent } from "./owl-carousel/auto-height-owl/auto-height-owl.component";
import { MouseWheelOwlComponent } from "./owl-carousel/mouse-wheel-owl/mouse-wheel-owl.component";
import { CommonProfileCardComponent } from "./basic-card/profile-cards/common-profile-card/common-profile-card.component";
import { VerticalScrollComponent } from "./scrollable/vertical-scroll/vertical-scroll.component";
import { AlwaysVisibleScrollComponent } from "./scrollable/always-visible-scroll/always-visible-scroll.component";
import { HorizontalScrollComponent } from "./scrollable/horizontal-scroll/horizontal-scroll.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    ScrollableComponent,
    TreeViewComponent,
    RatingComponent,
    DropzoneComponent,
    TourComponent,
    SweetAlert2Component,
    OwlCarouselComponent,
    RibbonsComponent,
    PaginationComponent,
    BreadcrumbUiComponent,
    StepsComponent,
    RangSliderComponent,
    ImageCropperComponent,
    StickyComponent,
    BasicCardComponent,
    DraggableCardComponent,
    Timeline1Component,
    PaginationIconsComponent,
    PaginationAlignmentComponent,
    PaginationActiveDisabledComponent,
    PaginationColorComponent,
    PaginationSizingComponent,
    DefaultPearlsStepsComponent,
    DefaultStepComponent,
    PearlsStepSizingComponent,
    PearlsStepStatesComponent,
    StepSizingComponent,
    StepStatesComponent,
    VerticalStepComponent,
    PearlsStepIconComponent,
    StepIconComponent,
    CardWithBorderComponent,
    CardWithTabComponent,
    ProfileCardsComponent,
    BlogCardsComponent,
    HorizontalCardComponent,
    BasicOwlComponent,
    ResponsiveOwlComponent,
    CenterOwlComponent,
    MergeOwlComponent,
    AutoWidthOwlComponent,
    NavigationsOwlComponent,
    EventsOwlComponent,
    StagePaddingOwlComponent,
    RightToLeftOwlComponent,
    LazyLoadOwlComponent,
    AnimateOwlComponent,
    AutoPlayOwlComponent,
    AutoHeightOwlComponent,
    MouseWheelOwlComponent,
    CommonProfileCardComponent,
    VerticalScrollComponent,
    AlwaysVisibleScrollComponent,
    HorizontalScrollComponent,
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    UsersModule,
    CarouselModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    NgxSliderModule,
    TreeModule,
    ImageCropperModule,
    FontAwesomeModule,
    DragulaModule.forRoot(),
    FaqModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class BonusUiModule {}
