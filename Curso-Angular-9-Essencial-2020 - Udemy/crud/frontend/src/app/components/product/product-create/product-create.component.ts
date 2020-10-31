import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {}

  product: Product = {
    name: '',
    price: null,
  };

  ngOnInit() {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Novo cadastro criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.location.back();
    //this.router.navigate(['/products'])
  }
}
