import { Injectable } from '@angular/core';
import { Product } from './Components/main/main.models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http
      .get<Product[]>('assets/Data/products.json')
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.message))
      );
  }
}
