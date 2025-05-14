import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent, ScrollToTopComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('menuSection') menuSectionRef!: ElementRef;

  scrollToMenu() {
    this.menuSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
