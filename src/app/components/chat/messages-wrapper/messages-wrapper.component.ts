import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChatService } from '../chat.service';
import Message from '../../../interfaces/message.interface';

@Component({
  selector: 'app-messages-wrapper',
  templateUrl: './messages-wrapper.component.html',
  styleUrls: ['./messages-wrapper.component.less']
})
export class MessagesWrapperComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public data: Message[] = [];

  constructor(private chatService: ChatService) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.chatService.message.subscribe(msg => {
        this.data.push(msg);
      })
    );
  }
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
