import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';

  private backgroundColor = this.defaultColor;


  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
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

}
