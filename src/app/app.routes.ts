import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('@feature/auth').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'page',
    loadChildren: () => import('@feature/page').then(m => m.PAGE_ROUTES),
  },
];
