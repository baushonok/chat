import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWrapperComponent } from './messages-wrapper.component';

describe('MessagesWrapperComponent', () => {
  let component: MessagesWrapperComponent;
  let fixture: ComponentFixture<MessagesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
