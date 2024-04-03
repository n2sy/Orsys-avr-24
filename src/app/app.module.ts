import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './jean/child/child.component';
import { CvComponent } from './projet/cv/cv.component';
import { ListeComponent } from './projet/liste/liste.component';
import { ItemComponent } from './projet/item/item.component';
import { DetailsComponent } from './projet/details/details.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './directives/custom-dir.directive';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DefaultAvatarPipe } from './pipes/default-avatar.pipe';
import { FirstService } from './services/first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    HomeAccountComponent,
    ItemAccountComponent,
    AddAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    DefaultAvatarPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
