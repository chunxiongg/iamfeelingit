import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective {

  constructor(private el: ElementRef) { }

  @Input('appMyStyle')
  
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.style.backgroundColor = '#6034c5';
  //   this.el.nativeElement.style.color = 'white';
  // }

  @HostListener('click') onMouseClick() {
    this.el.nativeElement.style.backgroundColor = '#6034c5';
    this.el.nativeElement.style.color = 'white';
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.style.backgroundColor = 'black';
  //   this.el.nativeElement.style.color = 'white';
  // }

}
