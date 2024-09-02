
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { AddPostComponent } from './add-post/add-post.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentBoxComponent } from './blog-single/comment-box/comment-box.component';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogSingleComponent,
    AddPostComponent,
    CommentBoxComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxDropzoneModule,
    NgbModule,
    SharedModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentBoxComponent
  ]
})
export class BlogModule { }
