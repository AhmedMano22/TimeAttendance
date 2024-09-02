import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';
import { FileItemsComponent } from './file-items/file-items.component';



@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerSidebarComponent,
    FileItemsComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule,
  ]
})
export class FileManagerModule { }
