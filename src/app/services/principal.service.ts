import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { productsAdapter } from '../adapters/product-adapter';
import { Product } from '../models/product.model';
import { LoginCredenciales } from '../models/loginCredenciales.model';
import { RegisterCredenciales } from '../models/registerCredenciales.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private apiURL = 'https://backend-mypiel-production.up.railway.app' /* 'http://localhost:3000' */;
  private http = inject(HttpClient);



  login(credentials: LoginCredenciales) {
    return this.http.post(`${this.apiURL}/auth/login`, credentials);
  }

  register(credentials: RegisterCredenciales) {
    return this.http.post(`${this.apiURL}/auth/register`, credentials);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}/product/all`)
      .pipe(map(products => productsAdapter(products)));
  }

  getProductByText(text: string): Observable<Product[]> {
    if (text.length < 3) {
      return throwError(() => new Error('El texto debe tener al menos 3 caracteres'));
    }

    return this.http.get<Product[]>(`${this.apiURL}/product/buscar/${text}`)
      .pipe(
        map(products => productsAdapter(products)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error en la búsqueda';

    if (error.status === 404) {
      errorMessage = 'No se encontraron productos';
    } else if (error.status === 400) {
      errorMessage = 'El texto de búsqueda es inválido';
    }

    return throwError(() => errorMessage);
  }
}
