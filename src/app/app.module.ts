import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatasourceService } from './services/datasource.service';
import { AuthModule } from './components/auth/auth.module';
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
    AuthModule,
    ChatModule,
  ],
  providers: [
    DatasourceService,
    WebsocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
