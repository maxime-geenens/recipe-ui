import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageSourcesComponent } from './components/footer/image-sources/image-sources.component';
import { AccountMenuComponent } from './components/navbar/account-menu/account-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ImageSourcesComponent,
    AccountMenuComponent,
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: [UserService],
})
export class CoreModule {}
