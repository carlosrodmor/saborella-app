import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {
    // Suscribirse a los eventos de fin de navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Realizar scroll suave al inicio de la página
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  }
}
