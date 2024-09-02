import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuickQueAndAnsComponent } from './quick-que-and-ans/quick-que-and-ans.component';
import { IntellectualPropertyComponent } from './intellectual-property/intellectual-property.component';
import { SellingAndBuyingComponent } from './selling-and-buying/selling-and-buying.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticlesAndVideosComponent } from './latest-articles-and-videos/latest-articles-and-videos.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FaqTopPartComponent } from './faq-top-part/faq-top-part.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FaqComponent,
    QuickQueAndAnsComponent,
    IntellectualPropertyComponent,
    SellingAndBuyingComponent,
    UserAccountsComponent,
    FeaturedTutorialsComponent,
    LatestArticlesAndVideosComponent,
    LatestUpdatesComponent,
    NavigationComponent,
    FaqTopPartComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbModule,
    
  ],
  exports: [
    FaqTopPartComponent,
    FeaturedTutorialsComponent
  ]
})
export class FaqModule { }
