import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TUI_IS_E2E } from '@taiga-ui/cdk';
import { Observable, Subject, Subscription, from, map } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';

/* declare var bootstrap: any;
 */

//если не подключен тайпинг, а с ним:

// import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  host: { '[class._e2e]': 'isE2E' },
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  private observable: Observable<number>;
  /* private promise: Promise<string>; */

  private subject: Subject<number>;
  constructor(
    public cartService: CartService,
    @Inject(TUI_IS_E2E) readonly isE2E: boolean
  ) {
    this.observable = from([1, 2, 3, 4, 5]);

    this.subject = new Subject<number>();

    let count = 0;

    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setInterval(() => {
      this.subject.complete();
    }, 4000);

    /*   this.promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 2000);
    }); */

    // this.observable = new Observable((observer) => {
    //   let count = 0;

    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setInterval(() => {
    //     observer.complete();
    //   }, 4000);
    //   /*     setTimeout(() => {
    //     observer.next('world');
    //   }, 3000); */
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);

    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     },
    //   };
    // });
  }

  private subscription!: Subscription;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {
    console.log(environment.production);

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    this.subscription = this.subject.subscribe({
      next: (param: number) => {
        console.log('subscriber1: ', param);
      },
      complete: () => {
        console.log('subscriber1 complete');
      },
      error: (error: string) => {
        console.log('ERROR!!! ' + error);
      },
    });
    // this.subscription = this.observable.subscribe({
    //   next: (param: number) => {
    //     console.log('subscriber1: ', param);
    //   },
    //   complete: () => {
    //     console.log('subscriber1 complete');
    //   },
    //   error: (error: string) => {
    //     console.log('ERROR!!! ' + error);
    //   },
    // });

    /*   this.promise.then((param: string) => {
      console.log(param);
    }); */
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  test() {
    this.observable
      .pipe(
        map((number: number) => {
          return 'число ' + number * 10;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber2: ', param);
      });
  }
}
