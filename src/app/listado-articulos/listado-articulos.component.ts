import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent {
  @Input() productos: Producto[] = [];
}
