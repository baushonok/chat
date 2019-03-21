import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import Author from '../../interfaces/author.interface';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public person: Author = { name: '' };

  constructor(private chatService: ChatService) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.getOtherPersonInfo().subscribe(person => {
        this.person = person;
      })
    );
  }
  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  public getOtherPersonInfo(): Observable<Author> {
    return this.chatService.getOtherPersonInfo();
  }
}
