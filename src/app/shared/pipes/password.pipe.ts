import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
  pure: true
})
export class PasswordPipe implements PipeTransform {

  transform(value: string): string {
    return (value || '').replace(/./g, '*');
  }

}
