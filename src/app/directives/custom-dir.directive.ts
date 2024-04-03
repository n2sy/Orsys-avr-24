import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg;
  @HostBinding('style.color') cl;

  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bg = 'grey';
    this.cl = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'white';
    this.cl = 'black';
  }
}
