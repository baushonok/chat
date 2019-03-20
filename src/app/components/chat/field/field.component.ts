import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
  public message: string = '';

  public ngOnInit(): void {
  }
  public sendMessage(message: string): void {
    console.log(message)
  }
}
