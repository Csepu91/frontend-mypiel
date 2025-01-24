import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { OnMyAutocuidadoComponent } from '../on-my-autocuidado/on-my-autocuidado.component';
import { Product } from '../../models/product.model';
import { PrincipalService } from '../../services/principal.service';
import { ProductItemComponent } from "../product-item/product-item.component";


@Component({
  selector: 'app-my-autocuidado',
  imports: [CommonModule, FormsModule, ProductListComponent, OnMyAutocuidadoComponent],
  templateUrl: './my-autocuidado.component.html',
  styleUrl: './my-autocuidado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAutocuidadoComponent {
  searchQuery = '';
  products = signal<Product[]>([]);
  errorMessage = signal<string>('');
  isLoggedIn = false;

  principalService = inject(PrincipalService);
  router = inject(Router);


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  createProfile() {
    this.router.navigate(['/registro']);
  }


  onSearch() {
    if (this.searchQuery.length < 3) {
      this.errorMessage.set('Ingrese al menos 3 caracteres');
      return;
    }

    this.principalService.getProductByText(this.searchQuery).subscribe({
      next: (products) => {
        this.products.set(products);
        this.errorMessage.set('');
      },
      error: (error) => {
        this.errorMessage.set(error);
        this.products.set([]);
      }
    });
  }


}