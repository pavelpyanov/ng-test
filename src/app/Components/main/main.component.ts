import { Component, OnInit } from '@angular/core';
import { Customer, Product, Purchase } from './main.models';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/customer.service';
import { ProductService } from 'src/app/product.service';
import { PurchaseService } from 'src/app/purchase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private titleService: Title,
    private customerService: CustomerService,
    private productsService: ProductService,
    private purchaseService: PurchaseService
  ) {}

  t = 'Product Purchases';

  customers?: Customer[];
  products?: Product[];
  purchase?: Purchase[];

  selectedCustomer: string = '';
  purchasedProducts?: Product[];

  isCustomersLoaded: boolean = false;
  isProductsLoaded: boolean = false;
  isPurchaseLoaded: boolean = false;

  async ngOnInit() {
    this.customerService.getItems().subscribe((data: Customer[]) => {
      this.customers = data;
      this.isCustomersLoaded = true;
    });

    this.productsService.getItems().subscribe((data: Customer[]) => {
      this.products = data;
      this.isProductsLoaded = true;
    });

    this.titleService.setTitle(this.t);
  }

  // When the user selects a new customer
  select(customerNumber: number) {
    this.isPurchaseLoaded = false;

    this.purchaseService.getItems().subscribe((data: Purchase[]) => {
      this.purchase = data;
      this.selectedCustomer = this.customerService.getCustomer(customerNumber);
      let customerPurchase = this.purchase!.filter(
        (p) => p.customerid === customerNumber
      );
      this.purchasedProducts = customerPurchase.map(
        (p) => this.products!.find((pr) => pr.id == p.productid)!
      );
      this.isPurchaseLoaded = true;
    });
  }
}
