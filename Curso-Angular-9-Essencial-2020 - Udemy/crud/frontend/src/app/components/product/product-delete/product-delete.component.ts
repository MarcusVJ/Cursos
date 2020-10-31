import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
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

  deleteProduct(): void {
    this.productService.delete(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.location.back();
    //this.router.navigate(['/products'])
  }
}
