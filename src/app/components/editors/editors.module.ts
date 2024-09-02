import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './editors-routing.module';
import { CkEditorsComponent } from './ck-editors/ck-editors.component';
import { KolkovEditorsComponent } from './kolkov-editors/kolkov-editors.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CkEditorsComponent,
    KolkovEditorsComponent,
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule,
    CKEditorModule,
    SharedModule,
    AngularEditorModule,
    FormsModule
  ]
})
export class EditorsModule { }
