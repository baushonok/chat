import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ChatComponent } from './chat.component';
import { WebsocketService } from '../../services/websocket.service';
import { MessagesWrapperComponent } from './messages-wrapper/messages-wrapper.component';
import { FieldComponent } from './field/field.component';
import { MessageComponent } from './messages-wrapper/message/message.component';
import Author from '../../interfaces/author.interface';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let title: HTMLHeadingElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        ChatComponent,
        MessagesWrapperComponent,
        FieldComponent,
        MessageComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector('h1');
  });

  describe('initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should have information about other person', () => {
      expect(component.person).toBeTruthy();
    });
    it('other person should have name', () => {
      expect(component.person.name).toBeDefined();
    });
  });
});
