import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPrueba } from '../../models';

@Component({
  selector: 'app-product-prueba-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-prueba-item.component.html',
  styleUrl: './product-prueba-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPruebaItemComponent {
  product = input.required<ProductPrueba>();
}
