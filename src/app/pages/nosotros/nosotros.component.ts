import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss',
})
export class NosotrosComponent implements OnInit {
  ngOnInit(): void {
    // Implementación para manejar las animaciones durante el scroll si es necesario
    this.configureScrollAnimation();
  }

  private configureScrollAnimation(): void {
    // Esta función se puede ampliar si quieres activar las animaciones
    // basadas en la posición de scroll en lugar de automáticamente
  }
}
