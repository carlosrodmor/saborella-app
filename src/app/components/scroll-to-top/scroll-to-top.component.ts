import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    // Mostrar el botón cuando el usuario haya desplazado más de 300px
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
