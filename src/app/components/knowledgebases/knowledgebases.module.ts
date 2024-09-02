import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgebasesRoutingModule } from './knowledgebases-routing.module';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { KnowledgeDetailComponent } from './knowledge-detail/knowledge-detail.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpBoardComponent } from './help-board/help-board.component';
import { FaqModule } from '../faq/faq.module';
import { KnowledgebasesComponent} from './knowledgebases.component'
import { LearningModule } from '../learning/learning.module';


@NgModule({
  declarations: [
    KnowledgebaseComponent,
    KnowledgeCategoryComponent,
    KnowledgeDetailComponent,
    HelpBoardComponent,
    KnowledgebasesComponent
  ],
  imports: [
    CommonModule,
    KnowledgebasesRoutingModule,
    AngularSvgIconModule.forRoot(),
    SharedModule,
    FaqModule,
    LearningModule

  ]
})
export class KnowledgebasesModule { }
