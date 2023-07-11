import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { UserService } from '../core/services/user.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  declarations: [RegisterComponent, LoginComponent],
  exports: [],
  providers: [UserService],
})
export class UsersModule {}
