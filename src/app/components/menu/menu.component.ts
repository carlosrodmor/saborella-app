import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
  HostListener,
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
  private menuObserver: IntersectionObserver | null = null;
  activeSection: number = 0; // Sección activa actualmente
  isMenuVisible: boolean = false; // Estado de visibilidad del menú

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
            'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800',
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
            'https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?q=80&w=800',
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
    // Esperar a que el DOM esté completamente renderizado
    setTimeout(() => {
      // Configurar el observador para las secciones del menú
      this.setupIntersectionObserver();

      // Configurar el observador para detectar cuando el menú está visible
      this.setupMenuObserver();

      // Ajustar la posición inicial de la navegación según la altura del header
      this.adjustNavPosition();

      // Observar el scroll para efectos visuales
      window.addEventListener('scroll', this.handleScroll.bind(this));

      // Observar cambios de tamaño de ventana
      window.addEventListener('resize', this.handleResize.bind(this));
    }, 200);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.menuObserver) {
      this.menuObserver.disconnect();
      this.menuObserver = null;
    }

    // Eliminar event listeners
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  // Configurar observador para detectar cuando el menú está visible
  private setupMenuObserver(): void {
    // Seleccionar el contenedor del menú
    const menuContainer = this.el.nativeElement as HTMLElement;

    // Opciones para el observador
    const options = {
      root: null, // viewport
      rootMargin: '-100px 0px', // Margen para activar un poco antes
      threshold: 0.1, // Activar cuando al menos 10% del elemento es visible
    };

    // Crear el observador
    this.menuObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si el menú es visible en el viewport
        this.isMenuVisible = entry.isIntersecting;

        // Aplicar la clase visible a los elementos de navegación
        this.updateNavigationVisibility();
      });
    }, options);

    // Observar el contenedor del menú
    this.menuObserver.observe(menuContainer);
  }

  // Actualizar la visibilidad de los elementos de navegación
  private updateNavigationVisibility(): void {
    // Actualizar navegación de escritorio
    const desktopNav = document.querySelector('.menu-nav') as HTMLElement;
    if (desktopNav) {
      if (this.isMenuVisible) {
        desktopNav.classList.add('visible');
      } else {
        desktopNav.classList.remove('visible');
      }
    }

    // Actualizar navegación móvil
    const mobileNav = document.querySelector('.menu-nav-mobile') as HTMLElement;
    if (mobileNav) {
      if (this.isMenuVisible) {
        mobileNav.classList.add('visible');
      } else {
        mobileNav.classList.remove('visible');
      }
    }
  }

  // Manejar el scroll para ajustes visuales
  private handleScroll(): void {
    // Aplicar efectos visuales sutiles a la navegación al hacer scroll
    const scrollPosition = window.scrollY;

    // Ajustar la navegación móvil
    const mobileNav = document.querySelector('.menu-nav-mobile') as HTMLElement;
    if (mobileNav && mobileNav.classList.contains('visible')) {
      if (scrollPosition > 20) {
        mobileNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
      } else {
        mobileNav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }
    }

    // Ajustar la navegación de escritorio
    const desktopNav = document.querySelector('.menu-nav') as HTMLElement;
    if (desktopNav && desktopNav.classList.contains('visible')) {
      if (scrollPosition > 20) {
        desktopNav.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.12)';
      } else {
        desktopNav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }
    }
  }

  // Manejar cambios de tamaño de ventana
  private handleResize(): void {
    // Desconectar y reconectar el observer para actualizarlo
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.menuObserver) {
      this.menuObserver.disconnect();
    }

    // Reiniciar la configuración
    this.adjustNavPosition();
    this.setupIntersectionObserver();
    this.setupMenuObserver();
    this.updateNavigationVisibility();

    // Centrar el elemento activo en la vista móvil
    if (window.innerWidth <= 992 && this.isMenuVisible) {
      this.centerActiveButtonInView(this.activeSection);
    }
  }

  // Método para desplazarse a una sección específica
  scrollToSection(index: number): void {
    const sectionElement = this.menuSections.toArray()[index].nativeElement;
    if (sectionElement) {
      // Obtener la altura del header/navbar
      const header =
        document.querySelector('header') ||
        document.querySelector('nav.navbar');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const mobileNavHeight = window.innerWidth <= 992 ? 45 : 0; // Altura aprox. de la navegación móvil

      // Calcular offset adecuado
      const offsetMargin = 15; // Margen adicional para mejor visualización
      const offset = headerHeight + mobileNavHeight + offsetMargin;

      // Calcular la posición final de desplazamiento
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Realizar desplazamiento suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Actualizar la sección activa
      this.activeSection = index;

      // Centrar el botón en la navegación móvil
      setTimeout(() => this.centerActiveButtonInView(index), 100);
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null, // Usar el viewport
      rootMargin: '0px',
      threshold: 0.5, // Activar cuando al menos 50% de la sección esté visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Encontrar el índice de la sección que está en pantalla
          const index = this.menuSections
            .toArray()
            .findIndex((section) => section.nativeElement === entry.target);
          if (index !== -1) {
            this.activeSection = index;
          }
        }
      });
    }, options);

    // Observar todas las secciones del menú
    setTimeout(() => {
      this.menuSections.forEach((section) => {
        this.observer?.observe(section.nativeElement);
      });
    }, 100);
  }

  // Centrar el botón activo en la navegación móvil
  private centerActiveButtonInView(index: number): void {
    if (window.innerWidth <= 992) {
      const navScroll = document.querySelector('.menu-nav-scroll');
      const activeButton = document.querySelectorAll('.menu-nav-btn')[
        index
      ] as HTMLElement;

      if (navScroll && activeButton) {
        // Calcular la posición central
        const scrollLeft =
          activeButton.offsetLeft -
          navScroll.clientWidth / 2 +
          activeButton.offsetWidth / 2;

        // Scroll horizontal suave hasta el botón
        navScroll.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }

  // Ajustar la posición de ambas navegaciones
  private adjustNavPosition(): void {
    // Obtener el header/navbar
    const header =
      document.querySelector('header') || document.querySelector('nav.navbar');
    if (header) {
      const headerHeight = header.getBoundingClientRect().height;

      // Ajustar nav móvil
      const mobileNav = document.querySelector(
        '.menu-nav-mobile'
      ) as HTMLElement;
      if (mobileNav) {
        mobileNav.style.top = `${headerHeight}px`;
      }

      // Ajustar nav escritorio
      const desktopNav = document.querySelector('.menu-nav') as HTMLElement;
      if (desktopNav) {
        desktopNav.style.top = `${headerHeight + 20}px`;
      }

      // Ajustar scroll-margin para todas las secciones
      this.menuSections.forEach((section) => {
        const offset =
          window.innerWidth <= 992 ? headerHeight + 60 : headerHeight + 30;
        (
          section.nativeElement as HTMLElement
        ).style.scrollMarginTop = `${offset}px`;
      });
    }
  }
}
