import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../main/main.models';

@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css'],
})
export class CustomerProductsComponent implements OnInit {
  @Input() isLoaded!: boolean;
  @Input() customerName!: string;
  @Input() products!: Product[];

  constructor() {
    this.isLoaded = false;
  }

  ngOnInit(): void {}
}
