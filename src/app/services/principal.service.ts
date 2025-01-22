import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductPrueba } from '../models';
import { productsPruebaAdapter } from '../adapters/productPrueba-adapter';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private apiURL = 'http://localhost:3000';
  private http = inject(HttpClient);

  getProductsPrueba(): Observable<ProductPrueba[]> {
    return this.http.get<ProductPrueba[]>(`${this.apiURL}/product/all`)
      .pipe(map(productsPrueba => productsPruebaAdapter(productsPrueba)));
  }
}