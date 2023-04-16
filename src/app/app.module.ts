import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { CustomersSelectComponent } from './Components/customers-select/customers-select.component';
import { CustomerProductsComponent } from './Components/customer-products/customer-products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomersSelectComponent,
    CustomerProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
