import { Component, input } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  product = input.required<Product>();

}