import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CartProductService } from '../../services/cart-product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService],
  /*   encapsulation: ViewEncapsulation.None, */ //позволяет использовать родительские стили в дочерних компонентах и на странице
})
export class ProductCardComponent {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime: '',
    };
  }

  /*   addProductToCart() {
    this.cartProductService.count++;
    this.addToCartEvent.emit(this.titleComponent.title);
  } */
}
