import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryWithDescComponent } from './masonry-with-desc/masonry-with-desc.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery-grid',
        component: GalleryGridComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'gallery-grid-desc',
        component: GalleryGridDescComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'masonry-gallery',
        component: MasonryGalleryComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'masonry-with-desc',
        component: MasonryWithDescComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'hover-effects',
        component: HoverEffectsComponent,
        data: { animation: [routingAnimation]}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
