import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { WebsocketService } from '../../services/websocket.service';
import Author from '../../interfaces/author.interface';
import Message from '../../interfaces/message.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public message: BehaviorSubject<Message> = new BehaviorSubject<Message>({} as Message);

  constructor(private wsService: WebsocketService) {
    this.message = <BehaviorSubject<Message>>wsService
                  .connect(environment.CHAT_URL);
  }
  public getOtherPersonInfo(): Observable<Author> {
    return of({
      name: 'other person'
    }).pipe(delay(1000));
  }
}
