import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product: Product = {
    name: '',
    price: null,
  };

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.productService.readById(paramId).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.location.back();
    //this.router.navigate(['/products'])
  }
}
