import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultAvatar',
})
export class DefaultAvatarPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'avatar.jpg';
    return value;
  }
}
