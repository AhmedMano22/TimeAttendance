import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';

import { BookmarkComponent } from './bookmark.component';
import { BookmarkProfileComponent } from './bookmark-profile/bookmark-profile.component';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';
import { AddBookmarkComponent } from './model/add-bookmark/add-bookmark.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookmarkComponent,
    BookmarkProfileComponent,
    CreateBookmarksComponent,
    AddBookmarkComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddBookmarkComponent
  ]
})
export class BookmarkModule { }
