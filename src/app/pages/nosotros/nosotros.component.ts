import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss',
})
export class NosotrosComponent {}
