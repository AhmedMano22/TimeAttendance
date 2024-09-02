import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningListComponent } from './learning-list/learning-list.component';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { FindeCourseComponent } from './learning-filter/finde-course/finde-course.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { UpcomingCoursesComponent } from './learning-filter/upcoming-courses/upcoming-courses.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogModule } from '../blog/blog.module';


@NgModule({
  declarations: [
    LearningListComponent,
    DetailedCourseComponent,
    LearningFilterComponent,
    FindeCourseComponent,
    CategoriesComponent,
    UpcomingCoursesComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule,
    BarRatingModule,
    BlogModule
  ],
  exports: [
    UpcomingCoursesComponent,
    CategoriesComponent,
    LearningFilterComponent
  ]
})
export class LearningModule { }
