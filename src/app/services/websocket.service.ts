import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import Message from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor() { }
  private subject: Observable<Message>;
  public connect(url: string): Observable<Message> {
    if (!this.subject) {
      this.subject = webSocket(url);
    }
    this.subject.subscribe(
      msg => console.log('message received:', msg),
      err => console.error(err),
      () => console.log('complete')
    );
    return this.subject;
  }
}
