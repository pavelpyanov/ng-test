import { Injectable } from '@angular/core';
import { Customer } from './Components/main/main.models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  items: Customer[] = [];

  constructor(private http: HttpClient) {}

  getItems() {
    const res = this.http
      .get<Customer[]>('assets/Data/customers.json')
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.message))
      );

    res.subscribe((data: Customer[]) => {
      this.items = data;
    });

    return res;
  }

  getCustomer(id: number) {
    var c = this.items?.find((s) => s.id == id);
    return c?.firstname + ' ' + c?.lastname + ' (' + c?.yearofbirth + ')';
  }
}
