import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    // Verificar la posición inicial del scroll
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
