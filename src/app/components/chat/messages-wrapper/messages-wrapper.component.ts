import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-messages-wrapper',
  templateUrl: './messages-wrapper.component.html',
  styleUrls: ['./messages-wrapper.component.less']
})
export class MessagesWrapperComponent implements OnInit {
  public data: Message[] = [];

  constructor(private chatService: ChatService) {
  }

  public ngOnInit(): void {
    this.chatService.message.subscribe(msg => {
      this.data.push(msg);
    });
  }
}
