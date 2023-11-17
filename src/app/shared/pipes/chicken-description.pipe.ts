import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDescription',
})
export class ChickenDescriptionPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([Кк]ур(?:иц|ин|о)[а-я]+)/g, (match: string) => {
      return match.toUpperCase(); //находит слово по регулярке и заменяет его на слово в верхнем регистре
    });
  }
}
