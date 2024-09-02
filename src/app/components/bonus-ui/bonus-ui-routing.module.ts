import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DropdownComponent } from "../ui-kits/dropdown/dropdown.component";
import { BasicCardComponent } from "./basic-card/basic-card.component";
import { BreadcrumbUiComponent } from "./breadcrumb-ui/breadcrumb-ui.component";
import { DraggableCardComponent } from "./draggable-card/draggable-card.component";
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { ImageCropperComponent } from "./image-cropper/image-cropper.component";
import { OwlCarouselComponent } from "./owl-carousel/owl-carousel.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { RangSliderComponent } from "./rang-slider/rang-slider.component";
import { RatingComponent } from "./rating/rating.component";
import { RibbonsComponent } from "./ribbons/ribbons.component";
import { ScrollableComponent } from "./scrollable/scrollable.component";
import { StepsComponent } from "./steps/steps.component";
import { StickyComponent } from "./sticky/sticky.component";
import { SweetAlert2Component } from "./sweet-alert2/sweet-alert2.component";
import { Timeline1Component } from "./timeline1/timeline1.component";
import { TourComponent } from "./tour/tour.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";

var routingAnimation = localStorage.getItem("animate");

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "scrollable",
        component: ScrollableComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "tree-view",
        component: TreeViewComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "rating",
        component: RatingComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "dropzone",
        component: DropzoneComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "scrollable",
        component: ScrollableComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "tour",
        component: TourComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "scrollable",
        component: ScrollableComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "sweetAlert2",
        component: SweetAlert2Component,
        data: { animation: [routingAnimation] },
      },
      {
        path: "owl-carousel",
        component: OwlCarouselComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "ribbons",
        component: RibbonsComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "pagination",
        component: PaginationComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "breadcrumb",
        component: BreadcrumbUiComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "steps",
        component: StepsComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "rang-slider",
        component: RangSliderComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "image-cropper",
        component: ImageCropperComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: "sticky",
        component: StickyComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "basic-card",
        component: BasicCardComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: "draggable-card",
        component: DraggableCardComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: "timeline1",
        component: Timeline1Component,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusUiRoutingModule {}
