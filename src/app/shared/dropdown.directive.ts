import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector:'[appDropdownDirective]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen = this.eleRef.nativeElement.contains(event.target)? !this.isOpen : false;
    }

    constructor(public eleRef: ElementRef){}

}