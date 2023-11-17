import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) {}
  // ngAfterViewInit(): void {
  //   // this.modalService.open(this.popup, {});

  //   const modalRef = this.modalService.open(PopupComponent);
  //   modalRef.componentInstance.data = 'окно о нас';
  // }

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
