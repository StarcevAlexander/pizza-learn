import { Injectable } from '@angular/core';
import { HttpClient /* HttpHeaders, HttpParams */ } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from 'src/types/product.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas');

    //
    //
    // getProducts(): Observable<ProductType[]> {
    //   let params = new HttpParams();
    //   params = params.set('extraField', 1);
    //   //доппараметры

    //   return this.http
    //     .get<{ data: ProductType[] }>(
    //       'https://testologia.site/pizzas',

    //       /*   {
    //         observe: 'response',
    //       } */
    //       //возвращает весь ответ

    //       //        {responseType: 'text'} // варианты ответа сервера
    //       {
    //         headers: new HttpHeaders({
    //           Authorization: 'auth-token',
    //         }),
    //         params: params,
    //         //не забыть передать параметры
    //       }
    //     )
    //     .pipe(
    //       tap((result) => console.log(result)),
    //       map(
    //         (result) => result.data
    //         //для работы с {observe: 'response'}
    //         /* (result.body ? result.body.data : []) */
    //       )
    //       // catchError(() => {
    //       //   return of([]);
    //       //   // throw new Error('omg');
    //       // }),
    //     );
  }
  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`);
  }

  createOrder(data: { product: string; address: string; phone: string }) {
    return this.http.post<{ success: boolean; message: string }>(
      environment.apiURL + `order-pizza`,
      data
    );
  }
}
