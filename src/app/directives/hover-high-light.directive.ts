import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighLight]',
  standalone: true
})
export class HoverHighLightDirective {
  @Input() appHoverHighLight= '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highLight(this.appHoverHighLight || 'yellow');

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highLight('');
  }

  private highLight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
