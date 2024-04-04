import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './projet/cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './projet/infos/infos.component';

let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
];

export const KLEE_ROUTING = RouterModule.forRoot(myRoutes);
