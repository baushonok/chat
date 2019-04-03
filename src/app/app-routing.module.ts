import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ChatComponent } from './components/chat/chat.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [RouterModule.forRoot([]), routing],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
