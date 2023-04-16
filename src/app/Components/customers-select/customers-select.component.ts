import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer, Product, Purchase } from '../main/main.models';

@Component({
  selector: 'app-customers-select',
  templateUrl: './customers-select.component.html',
  styleUrls: ['./customers-select.component.css'],
})
export class CustomersSelectComponent {
  @Input() customers?: Customer[];
  @Output() outSelectCustomer = new EventEmitter<number>();

  onSelect(event: any) {
    this.outSelectCustomer.emit(Number(event.target.value));
  }
}
