import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { catchError, map, of, retry, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/types/product.type';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router
  ) {}

  products: ProductType[] = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.loading = true;
    this.productService
      .getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
        //срабатывает когда получаю какой-либо ответ
      )
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log('next');
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        },
      });
  }
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    this.popupComponent.open();
    // this.modalService.open(this.popup, {});
    //   const modalRef = this.modalService.open(PopupComponent);
    //   modalRef.componentInstance.data = 'главное окно';
    //
  }
}
