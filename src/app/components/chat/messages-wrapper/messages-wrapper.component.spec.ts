import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWrapperComponent } from './messages-wrapper.component';
import { MessageComponent } from './message/message.component';

describe('MessagesWrapperComponent', () => {
  let component: MessagesWrapperComponent;
  let fixture: ComponentFixture<MessagesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesWrapperComponent,
        MessageComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('initialization', () => {
    it('should create MessagesWrapperComponent', () => {
      expect(component).toBeTruthy();
    });
    it('should have empty array as data', () => {
      expect(component.data).toEqual([]);
    });
  });
});
