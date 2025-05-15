import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font-tester',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-tester.component.html',
  styleUrls: ['./font-tester.component.scss'],
})
export class FontTesterComponent {
  // Fuentes disponibles
  fonts = [
    { name: 'Corfe (--font-headline)', variable: 'var(--font-headline)' },
    { name: 'Playfair Display (--font-serif)', variable: 'var(--font-serif)' },
    { name: 'Montserrat (--font-sans)', variable: 'var(--font-sans)' },
  ];

  // Estilos de texto
  styles = [
    { name: 'Regular', weight: '400', style: 'normal' },
    { name: 'Italic', weight: '400', style: 'italic' },
    { name: 'Medium', weight: '500', style: 'normal' },
    { name: 'Medium Italic', weight: '500', style: 'italic' },
    { name: 'SemiBold', weight: '600', style: 'normal' },
    { name: 'Bold', weight: '700', style: 'normal' },
    { name: 'Bold Italic', weight: '700', style: 'italic' },
  ];

  // Tamaños de texto
  sizes = [
    { name: 'h1', size: '3.5rem' },
    { name: 'h2', size: '2.5rem' },
    { name: 'h3', size: '2rem' },
    { name: 'h4', size: '1.25rem' },
    { name: 'p', size: '1.125rem' },
    { name: 'small', size: '0.875rem' },
  ];
}
