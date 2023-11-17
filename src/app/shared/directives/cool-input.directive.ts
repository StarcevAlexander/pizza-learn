import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { every } from 'rxjs';

@Directive({
  selector: '[coolInput]',
})
export class CoolInputDirective implements OnInit {
  @Input() coolInputDefaultBackgroundColor: string = 'white'; //цвет по умолчанию
  @Input() coolInputFocusBackgroundColor: string = 'orange'; //цвет по умолчанию
  constructor(private el: ElementRef, private rend: Renderer2) {}

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }
  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  /* @HostListener('focus')
  onfocus() {
    this.changeElementBgColor('orange');
  }
  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor('white');
  } */
  @HostListener('focus')
  onfocus() {
    this.changeElementBgColor(this.coolInputFocusBackgroundColor);
    this._isOnFocus = true;
  }
  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBackgroundColor);
    this._isOnFocus = false;
  }
  @HostListener('click', ['$event', '$event.target']) // илм просто ['$event.target']
  onClick(event: Event, target: HTMLElement) {
    console.log(target);
    console.log(event);
  }

  ngOnInit(): void {
    //    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.changeElementBgColor(this.coolInputDefaultBackgroundColor);
    this.rend.setAttribute(
      this.el.nativeElement,
      'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*'
    );

    /*     const text = this.rend.createElement('span');
    this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
    this.rend.setStyle(text, 'color', 'red');
    this.rend.insertBefore(
      this.el.nativeElement.parentElement,
      text,
      this.rend.nextSibling(this.el.nativeElement)
    ); */
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
    this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
