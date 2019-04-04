import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs: 'appDropDown'
})
export class DropDownDirective {

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  private isOpen = false;

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
}
