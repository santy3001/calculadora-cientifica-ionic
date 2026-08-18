import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'calculadora',
    loadComponent: () =>
      import('./calculadora/calculadora.page').then((m) => m.CalculadoraPage),
  },
  {
    path: '',
    redirectTo: 'calculadora',
    pathMatch: 'full',
  },
];