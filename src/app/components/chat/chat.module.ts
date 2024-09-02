import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

import { ChatAppComponent } from './chat-app/chat-app.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { UsersChatsComponent } from './chat-app/users-chats/users-chats.component';
import { ChatsComponent } from './chat-app/chats/chats.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ChatAppComponent,
    VideoChatComponent,
    UsersChatsComponent,
    ChatsComponent,
    ChatMenuComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    NgbNavModule
  ],
  exports: [
    ChatsComponent
  ]
})
export class ChatModule { }
