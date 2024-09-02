import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './all-gallery-routing.module';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryWithDescComponent } from './masonry-with-desc/masonry-with-desc.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxMasonryModule } from 'ngx-masonry';

import 'hammerjs';
import 'mousetrap';


@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridDescComponent,
    MasonryGalleryComponent,
    MasonryWithDescComponent,
    HoverEffectsComponent,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    NgxMasonryModule,
    
  ]
})
export class AllGalleryModule { }
