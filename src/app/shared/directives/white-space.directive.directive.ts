import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[whiteSpace]',
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef) {}

  @Input()
  set whiteSpace(value: string) {
    this.el.nativeElement.textContent = value.trim();
  }

}

