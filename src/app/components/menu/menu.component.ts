import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  nombre: string;
  precio: number;
  descripcion?: string;
  imagen?: string;
  destacado?: boolean;
  vegano?: boolean;
  sinGluten?: boolean;
  picante?: boolean;
}

interface MenuSeccion {
  titulo: string;
  items: MenuItem[];
  imagenFondo?: string;
  mostrarEtiquetas?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('menuSection') menuSections!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;

  menuSecciones: MenuSeccion[] = [
    {
      titulo: 'Hamburguesas',
      imagenFondo:
        'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1920',
      mostrarEtiquetas: true,
      items: [
        {
          nombre: 'La Infanta XXL',
          precio: 27.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy ó pollo, cheddar, lechuga, tomate, ketchup, mayonesa y mostaza',
          imagen:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800',
          destacado: true,
          picante: true,
        },
        {
          nombre: 'La InfantaXS',
          precio: 10.5,
          descripcion: 'Pan Brioche individual',
          imagen:
            'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=800',
        },
        {
          nombre: 'La Princesa XXL',
          precio: 35.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy, pollo, cheddar, york, lechuga, tomate, ketchup, mayonesa y mostaza',
          imagen:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800',
          destacado: true,
        },
        {
          nombre: 'La Princesa XS',
          precio: 14.9,
          descripcion: 'Pan Brioche individual',
          imagen:
            'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800',
        },
        {
          nombre: 'La Reina XXL',
          precio: 46.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy, pollo, ternera mechada, pierna de cerdo a baja temperatura, triple de cheddar, york, lechuga, tomate, ketchup, mayonesa y mostaza',
          imagen:
            'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800',
          destacado: true,
          picante: true,
        },
        {
          nombre: 'La Reina XS',
          precio: 20.0,
          descripcion: 'Pan Brioche individual',
          imagen:
            'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800',
        },
      ],
    },
    {
      titulo: 'Postres',
      imagenFondo:
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1920',
      mostrarEtiquetas: true,
      items: [
        {
          nombre: 'Bella Chocolate',
          precio: 6.9,
          descripcion: 'Brownie de chocolate con un giro celestial',
          imagen:
            'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800',
          destacado: true,
        },
        {
          nombre: 'Cheesebella Clásica',
          precio: 6.5,
          descripcion: 'La Reina de las tartas ahora con frutos rojos',
          imagen:
            'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800',
          sinGluten: true,
        },
        {
          nombre: 'Bella Italiana',
          precio: 6.0,
          descripcion: 'Tiramisú Italiano con un toque Saborella',
          imagen:
            'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800',
        },
        {
          nombre: 'Nube Bella',
          precio: 6.5,
          descripcion: 'Bizcocho 3 leches con merengue',
          imagen:
            'https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=800',
          vegano: true,
          sinGluten: true,
        },
      ],
    },
    {
      titulo: 'Picoteo',
      imagenFondo:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920',
      items: [
        {
          nombre: 'Anillos de queso Gouda (6 uni)',
          precio: 4.9,
          imagen:
            'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800',
        },
        {
          nombre: 'Delicias de Pollo (6 uni)',
          precio: 4.9,
          imagen:
            'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800',
        },
        {
          nombre: 'Patatas Fritas (Ración)',
          precio: 4.9,
          imagen:
            'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800',
        },
      ],
    },
    {
      titulo: 'Bebidas',
      imagenFondo:
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1920',
      items: [
        {
          nombre: 'Café',
          precio: 1.6,
          imagen:
            'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=800',
        },
        {
          nombre: 'Infusiones Tradicionales',
          precio: 1.6,
          imagen:
            'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800',
        },
        {
          nombre: 'Infusiones especiales',
          precio: 1.8,
          imagen:
            'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800',
        },
        {
          nombre: 'Cola cao',
          precio: 1.8,
          imagen:
            'https://images.unsplash.com/photo-1578324510673-3aa1757d785f?q=80&w=800',
        },
        {
          nombre: 'Zumo de naranja',
          precio: 2.8,
          imagen:
            'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800',
        },
        {
          nombre: 'Zumo artesano (Detox)',
          precio: 4.0,
          imagen:
            'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800',
        },
        {
          nombre: 'Smoothies',
          precio: 4.0,
          imagen:
            'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800',
        },
        {
          nombre: 'Batidos naturales',
          precio: 5.0,
          imagen:
            'https://images.unsplash.com/photo-1553530979-7b52d1887356?q=80&w=800',
        },
        {
          nombre: 'Refresco',
          precio: 2.7,
          imagen:
            'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800',
        },
        {
          nombre: 'Caña o botellín',
          precio: 1.7,
          imagen:
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800',
        },
        {
          nombre: 'Doble o Tercio',
          precio: 2.7,
          imagen:
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800',
        },
        {
          nombre: 'Jarra cerveza',
          precio: 3.3,
          imagen:
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800',
        },
        {
          nombre: 'Vermut',
          precio: 2.7,
          imagen:
            'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=800',
        },
        {
          nombre: 'Tinto de verano',
          precio: 2.6,
          imagen:
            'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Blanco Rueda',
          precio: 2.0,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Albariño',
          precio: 2.4,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Ribera del Duero',
          precio: 2.4,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Tinto Montelciego',
          precio: 2.4,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Tinto Ribera',
          precio: 2.6,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          nombre: 'Copa Vino Tinto Rioja',
          precio: 2.6,
          imagen:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
      ],
    },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        }
      });
    }, options);

    // Observar las secciones de menú
    const sectionElements =
      this.el.nativeElement.querySelectorAll('.menu-section');
    sectionElements.forEach((element: Element) => {
      this.observer?.observe(element);
    });
  }
}
