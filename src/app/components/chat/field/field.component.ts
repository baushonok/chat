import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { ChatService } from '../chat.service';
import Message from '../../../interfaces/message.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
  public message: string = '';

  constructor(private chatService: ChatService) {}

  public ngOnInit(): void {
  }
  public sendMessage(event: Event, form: NgForm, message: string): void {
    event.preventDefault();
    if (form.invalid) {
      return;
    }
    this.chatService.message.next(<Message> {
      data: message,
      timestamp: Date.now()
    });
    this.message = '';
  }
}
