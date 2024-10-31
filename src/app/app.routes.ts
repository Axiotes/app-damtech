import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home/all-users', component: HomeComponent },
  { path: 'home/admin-users', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home/all-users' },
  { path: '**', redirectTo: '/home/all-users' },
];
