import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { WebsocketService } from './websocket.service';
import { Message } from '../interfaces/message.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public message: BehaviorSubject<Message> = new BehaviorSubject<Message>({} as Message);

  constructor(private wsService: WebsocketService) {
    this.message = <BehaviorSubject<Message>>wsService
                  .connect(environment.CHAT_URL);
  }
}
