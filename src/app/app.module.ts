import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebsocketService} from './services/websocket.service';
import { ChatService } from './components/chat/chat.service';
import { ChatModule } from './components/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChatModule,
  ],
  providers: [WebsocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
