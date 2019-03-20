import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MessagesWrapperModule } from './messages-wrapper/messages-wrapper.module';
import { FieldModule } from './field/field.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    MessagesWrapperModule,
    FieldModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
