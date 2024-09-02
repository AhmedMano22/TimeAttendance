import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SocialAppRoutingModule } from "./social-app-routing.module";
import { SocialAppComponent } from "./social-app.component";
import { TimeLineComponent } from "./time-line/time-line.component";
import { AboutComponent } from "./about/about.component";
import { FriendsComponent } from "./friends/friends.component";
import { PhotosComponent } from "./photos/photos.component";
import { TimeLineLeftComponent } from "./time-line/time-line-left/time-line-left.component";
import { TimeLineCenterComponent } from "./time-line/time-line-center/time-line-center.component";
import { TimeLineRightComponent } from "./time-line/time-line-right/time-line-right.component";
import { MyProfileComponent } from "./time-line/time-line-left/my-profile/my-profile.component";
import { MutualFriendComponent } from "./time-line/time-line-left/mutual-friend/mutual-friend.component";
import { ActivityFeedComponent } from "./time-line/time-line-left/activity-feed/activity-feed.component";
import { CommentOneComponent } from "./time-line/time-line-center/comment-one/comment-one.component";
import { CommentTwoComponent } from "./time-line/time-line-center/comment-two/comment-two.component";
import { ProfileIntroComponent } from "./time-line/time-line-right/profile-intro/profile-intro.component";
import { AboutCenterComponent } from "./about/about-center/about-center.component";
import { AddFriendsComponent } from "./about/about-center/add-friends/add-friends.component";
import { HobbiesComponent } from "./about/about-center/hobbies/hobbies.component";
import { EducationAndEmploymentComponent } from "./about/about-center/education-and-employment/education-and-employment.component";
import { ViewedYourProfileComponent } from "./about/about-center/viewed-your-profile/viewed-your-profile.component";
import { ActivityLogComponent } from "./about/about-center/activity-log/activity-log.component";

import { SharedModule } from "src/app/shared/shared.module";
import { UsersModule } from "../users/users.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LightboxModule } from "ng-gallery/lightbox";
import { GalleryModule } from "ng-gallery";

import "hammerjs";
import "mousetrap";

@NgModule({
  declarations: [
    SocialAppComponent,
    TimeLineComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    TimeLineLeftComponent,
    TimeLineCenterComponent,
    TimeLineRightComponent,
    MyProfileComponent,
    MutualFriendComponent,
    ActivityFeedComponent,
    CommentOneComponent,
    CommentTwoComponent,
    ProfileIntroComponent,
    AboutCenterComponent,
    AddFriendsComponent,
    HobbiesComponent,
    EducationAndEmploymentComponent,
    ViewedYourProfileComponent,
    ActivityLogComponent,
  ],
  imports: [CommonModule, SocialAppRoutingModule, SharedModule, NgbModule, UsersModule, GalleryModule, LightboxModule],
})
export class SocialAppModule {}
