import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'design-1',
    loadComponent: () => import('./design-1/design-1.component'),
  },
  {
    path: 'design-2',
    loadComponent: () => import('./design-2/design-2.component'),
  },
  {
    path: 'design-3',
    loadComponent: () => import('./design-3/design-3.component'),
  },
];
