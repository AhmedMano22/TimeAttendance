import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UserProfileComponent } from './users-profile/user-profile/user-profile.component';
import { AboutMeComponent } from './users-profile/left-content/about-me/about-me.component';
import { LeftContentComponent } from './users-profile/left-content/left-content.component';
import { RightContentComponent } from './users-profile/right-content/right-content.component';
import { FollowersComponent } from './users-profile/left-content/followers/followers.component';
import { LatestPhotosComponent } from './users-profile/left-content/latest-photos/latest-photos.component';
import { FollowingsComponent } from './users-profile/left-content/followings/followings.component';
import { FriendsComponent } from './users-profile/left-content/friends/friends.component';
import { SinglePostComponent } from './users-profile/right-content/single-post/single-post.component';
import { DoubleComponent } from './users-profile/right-content/double/double.component';
import { MyProfileComponent } from './users-edit/my-profile/my-profile.component';
import { EditProfileComponent } from './users-edit/edit-profile/edit-profile.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UsersProfileComponent,
    UsersEditComponent,
    UsersCardsComponent,
    UserProfileComponent,
    AboutMeComponent,
    LeftContentComponent,
    RightContentComponent,
    FollowersComponent,
    LatestPhotosComponent,
    FollowingsComponent,
    FriendsComponent,
    SinglePostComponent,
    DoubleComponent,
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgbModule,
  ],
  exports: [
    UserProfileComponent,
    FollowersComponent,
    LatestPhotosComponent,
    FollowingsComponent,
    FriendsComponent,
    LeftContentComponent,
    RightContentComponent,
  ]
})
export class UsersModule { }
