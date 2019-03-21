import { Component, OnInit, Input } from '@angular/core';
import Message from '../../../../interfaces/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  @Input() public data: Message = {} as Message;
  constructor() { }

  public ngOnInit(): void {
  }
}
