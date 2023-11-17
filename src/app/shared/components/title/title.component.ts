import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string = '';
  toUpper() {
    return this.title.toLocaleUpperCase();
  }
  toLower() {
    return this.title.toLowerCase();
  }
}
