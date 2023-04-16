import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './Components/main/main.models';
import { catchError, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http
      .get<Purchase[]>('assets/Data/customer-purchases.json')
      .pipe(
        delay(1000),
        catchError((err: HttpErrorResponse) => throwError(() => err.message))
      );
  }
}
