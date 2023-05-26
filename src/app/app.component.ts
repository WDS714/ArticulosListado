import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Listado de Artículos</h1>
    <app-listado-articulos [productos]="productos"></app-listado-articulos>
  `
})
export class AppComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'suavitel', precio: 1000 },
    { id: 2, nombre: 'nintendo switch', precio: 150000 },
    { id: 3, nombre: 'papel', precio: 800 },
    { id: 4, nombre: 'xbox', precio: 4000000 },
    { id: 5, nombre: 'aiphone', precio: 5000000 }
  ];
}
