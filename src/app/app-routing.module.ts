import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './components/auth/auth.guard.service';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
