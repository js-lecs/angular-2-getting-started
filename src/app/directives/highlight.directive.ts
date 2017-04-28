import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';

  private backgroundColor;
  private childElRef;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
    this.childElRef.hidden = true;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
    this.childElRef.hidden = false;
  };

  @HostListener('click', ['$event']) onclick(event) {
    console.log('event target', event.target);
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }




  constructor(private elementRef: ElementRef, private renderer: Renderer) {

    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');


  }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.childElRef = this.elementRef.nativeElement.querySelector('h1');

  }

}
