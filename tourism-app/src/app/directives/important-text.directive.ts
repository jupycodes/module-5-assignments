import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow'
   }

}
