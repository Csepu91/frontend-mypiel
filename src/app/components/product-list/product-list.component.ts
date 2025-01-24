import { Component, inject, input, Signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PrincipalService } from '../../services/principal.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  /*   principalService = inject(PrincipalService);
   */
  /*   showProducts = false;
  
    principalService = inject(PrincipalService);
  
    product: Signal<Product[] | undefined> = toSignal(this.principalService.getProducts());
  
    toggleProducts() {
      this.showProducts = !this.showProducts;
  
    } */
}
