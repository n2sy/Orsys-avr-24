import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './projet/cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './projet/infos/infos.component';
import { AddComponent } from './projet/add/add.component';
import { EditComponent } from './projet/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Version 2 avec Children
let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: EditComponent },
    ],
  },
  { path: 'accounts', component: HomeAccountComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  }, // Lazy Loading
  { path: 'manage-servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

//Version 1  avec Children
// let myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   {
//     path: 'cv',
//     children: [
//       { path: '', component: CvComponent },
//       { path: 'add', component: AddComponent },
//       {
//         path: ':id',
//         children: [
//           { path: '', component: InfosComponent },
//           { path: 'edit', component: EditComponent },
//         ],
//       },
//     ],
//   },
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];

// Version sans children
// let myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   { path: 'cv', component: CvComponent },
//   { path: 'cv/add', component: AddComponent },
//   { path: 'cv/:id', component: InfosComponent },
//   { path: 'cv/:id/edit', component: EditComponent },
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];

export const KLEE_ROUTING = RouterModule.forRoot(myRoutes);
