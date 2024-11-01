import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllInfosComponent } from './pages/all-infos/all-infos.component';
import { DataRegistrationComponent } from './pages/data-registration/data-registration.component';

export const routes: Routes = [
  {
    path: 'home/all-users',
    component: HomeComponent,
    children: [
      { path: 'infos', component: AllInfosComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home/all-users/infos' },
    ],
  },
  {
    path: 'home/admin-users',
    component: HomeComponent,
    children: [
      { path: 'infos', component: AllInfosComponent },
      { path: 'data-registration/:id_dam', component: DataRegistrationComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home/admin-users/infos' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/home/all-users/infos' },
  { path: '**', redirectTo: '/home/all-users/infos' },
];
