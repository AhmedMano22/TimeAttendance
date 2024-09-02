import { Component, OnInit } from '@angular/core';
import { ChatUsers } from 'src/app/shared/model/chat.model';
import { ChatService } from 'src/app/shared/services/chat/chat.service';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss']
})
export class VideoChatComponent implements OnInit {

  public openTab : string = "call";
  show = false;
  active = 1;
 
  constructor() {
  }

  ngOnInit(): void {
    
  }

  openMenu(){
    this.show = !this.show
  }

  public tabbed(val: string) {
  	this.openTab = val
  }

}
