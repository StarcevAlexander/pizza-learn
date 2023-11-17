import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime: '',
    };
  }

  product: ProductType;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id']).subscribe({
          next: (data) => {
            this.product = data;
            console.log(this.product);
          },
          error: (error) => {
            this.router.navigate(['/']);
          },
        });
      }
    });
  }
}
