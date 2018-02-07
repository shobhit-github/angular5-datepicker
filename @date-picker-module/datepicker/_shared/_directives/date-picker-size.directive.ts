// ./app/shared/hidden.directive.ts
import {Directive, ElementRef, OnInit} from '@angular/core';


// Directive decorator
@Directive({
  selector: '[adjustSize]'
})
// Directive class
export class DatePickerSizeDirective implements OnInit {


  private element: any;


  constructor(private elemRef: ElementRef) {

    this.element = elemRef.nativeElement;
  }

  ngOnInit() {

      this.adjustSize ( document.querySelector(`date-picker`).parentElement );
  }

  private adjustSize = (elem) => {

      this.element.style.height =  `${parseInt( elem.style.height) - 66}px`;
  }
}
