import { Directive, ElementRef, Renderer, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input() default = 'white';
  @Input('highlight') background = 'yellow';


  private backgroundColor: string;
  private hidden: Boolean = false;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.background;
    // this.hidden = true;

  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.default;
    // this.hidden = false;
  }

  @HostBinding('style.backgroundColor') get getColor() {
    return this.backgroundColor;
  }

  @HostBinding('hidden') get hideElement() {
    return this.hidden;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');

  }
  ngOnInit() {
    this.backgroundColor = this.default;
  }
}
