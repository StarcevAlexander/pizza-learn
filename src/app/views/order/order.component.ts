import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  readonly loader =
    '<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/></svg>';
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  private subscription!: Subscription;
  private subscriptionOrder!: Subscription;

  ngOnInit(): void {
    /*  if (this.cartService.product) {
      this.formValues.productTitle = this.cartService.product;
      */

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionOrder.unsubscribe();
  }

  test() {
    this.subscription.unsubscribe();
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  };

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    //ajax

    this.subscriptionOrder = this.productService
      .createOrder({
        product: this.formValues.productTitle,
        address: this.formValues.address,
        phone: this.formValues.phone,
      })
      .subscribe((response) => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ');
        } else {
          alert('ошибка');
        }
      });

    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    };
  }
}
