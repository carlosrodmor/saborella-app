import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent {
  // El componente ahora es más simple, sin formularios ni lógica asociada
}
