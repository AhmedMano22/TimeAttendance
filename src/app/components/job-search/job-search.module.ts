import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyComponent } from './apply/apply.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobApplyComponent } from './job-details/job-apply/job-apply.component';
import { PersonalDetailsComponent } from './apply/personal-details/personal-details.component';
import { EducationComponent } from './apply/education/education.component';
import { UploadFilesComponent } from './apply/upload-files/upload-files.component';
import { ExperienceComponent } from './apply/experience/experience.component';

@NgModule({
  declarations: [
    ListViewComponent,
    CardsViewComponent,
    JobDetailsComponent,
    ApplyComponent,
    JobFilterComponent,
    JobApplyComponent,
    PersonalDetailsComponent,
    EducationComponent,
    UploadFilesComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule,
    NgbModule,
    
  ]
})
export class JobSearchModule { }
