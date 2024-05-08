/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@org/stencil-js/dist-custom-elements';

import { defineCustomElement as defineMyComponent } from '@org/stencil-js/dist-custom-elements/my-component.js';
@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  standalone: true
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


