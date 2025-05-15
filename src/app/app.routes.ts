import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(
        (m) => m.NosotrosComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(
        (m) => m.ContactoComponent
      ),
  },
  {
    path: 'font-test',
    loadComponent: () =>
      import('./pages/font-test/font-test.component').then(
        (m) => m.FontTestComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
