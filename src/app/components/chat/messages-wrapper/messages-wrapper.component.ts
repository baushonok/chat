import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-messages-wrapper',
  templateUrl: './messages-wrapper.component.html',
  styleUrls: ['./messages-wrapper.component.less']
})
export class MessagesWrapperComponent implements OnInit {
  public data: Message[] = [];
  public ngOnInit(): void {
    this.data = [
      {
        id: '1',
        data: 'Hi!',
        timestamp: Date.now(),
        isMine: true
      },
      {
        id: '2',
        data: 'Hello!',
        timestamp: Date.now()
      },
    ];
  }
}
