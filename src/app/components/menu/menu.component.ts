import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  nombre: string;
  precio: number;
  descripcion?: string;
}

interface MenuSeccion {
  titulo: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuSecciones: MenuSeccion[] = [
    {
      titulo: 'Hamburguesas',
      items: [
        {
          nombre: 'La Infanta XXL',
          precio: 27.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy ó pollo, cheddar, lechuga, tomate, ketchup, mayonesa y mostaza',
        },
        {
          nombre: 'La InfantaXS',
          precio: 10.5,
          descripcion: 'Pan Brioche individual',
        },
        {
          nombre: 'La Princesa XXL',
          precio: 35.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy, pollo, cheddar, york, lechuga, tomate, ketchup, mayonesa y mostaza',
        },
        {
          nombre: 'La Princesa XS',
          precio: 14.9,
          descripcion: 'Pan Brioche individual',
        },
        {
          nombre: 'La Reina XXL',
          precio: 46.9,
          descripcion:
            'Pan Saborella acompañado de Ternera con bacon crunchy, pollo, ternera mechada, pierna de cerdo a baja temperatura, triple de cheddar, york, lechuga, tomate, ketchup, mayonesa y mostaza',
        },
        {
          nombre: 'La Reina XS',
          precio: 20.0,
          descripcion: 'Pan Brioche individual',
        },
      ],
    },
    {
      titulo: 'Postres',
      items: [
        {
          nombre: 'Bella Chocolate',
          precio: 6.9,
          descripcion: 'Brownie de chocolate con un giro celestial',
        },
        {
          nombre: 'Cheesebella Clásica',
          precio: 6.5,
          descripcion: 'La Reina de las tartas ahora con frutos rojos',
        },
        {
          nombre: 'Bella Italiana',
          precio: 6.0,
          descripcion: 'Tiramisú Italiano con un toque Saborella',
        },
        {
          nombre: 'Nube Bella',
          precio: 6.5,
          descripcion: 'Bizcocho 3 leches con merengue',
        },
      ],
    },
    {
      titulo: 'Picoteo',
      items: [
        {
          nombre: 'Anillos de queso Gouda (6 uni)',
          precio: 4.9,
        },
        {
          nombre: 'Delicias de Pollo (6 uni)',
          precio: 4.9,
        },
        {
          nombre: 'Patatas Fritas (Ración)',
          precio: 4.9,
        },
      ],
    },
    {
      titulo: 'Bebidas',
      items: [
        { nombre: 'Café', precio: 1.6 },
        { nombre: 'Infusiones Tradicionales', precio: 1.6 },
        { nombre: 'Infusiones especiales', precio: 1.8 },
        { nombre: 'Cola cao', precio: 1.8 },
        { nombre: 'Zumo de naranja', precio: 2.8 },
        { nombre: 'Zumo artesano (Detox)', precio: 4.0 },
        { nombre: 'Smoothies', precio: 4.0 },
        { nombre: 'Batidos naturales', precio: 5.0 },
        { nombre: 'Refresco', precio: 2.7 },
        { nombre: 'Caña o botellín', precio: 1.7 },
        { nombre: 'Doble o Tercio', precio: 2.7 },
        { nombre: 'Jarra cerveza', precio: 3.3 },
        { nombre: 'Vermut', precio: 2.7 },
        { nombre: 'Tinto de verano', precio: 2.6 },
        { nombre: 'Copa Vino Blanco Rueda', precio: 2.0 },
        { nombre: 'Copa Vino Albariño', precio: 2.4 },
        { nombre: 'Copa Vino Ribera del Duero', precio: 2.4 },
        { nombre: 'Copa Vino Tinto Montelciego', precio: 2.4 },
        { nombre: 'Copa Vino Tinto Ribera', precio: 2.6 },
        { nombre: 'Copa Vino Tinto Rioja', precio: 2.6 },
      ],
    },
  ];
}
