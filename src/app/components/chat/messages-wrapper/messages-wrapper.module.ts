import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesWrapperComponent } from './messages-wrapper.component';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [
    MessagesWrapperComponent,
  ],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports: [
    MessagesWrapperComponent,
  ]
})
export class MessagesWrapperModule { }
