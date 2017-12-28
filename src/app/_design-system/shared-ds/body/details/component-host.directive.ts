import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ComponentHost]'
})
export class ComponentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
