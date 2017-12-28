import {Component, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {ContentModel} from '../../../../core-ds/models/content-model';
import {ComponentHostDirective} from '../../details/component-host.directive';
import {ComponentInterface} from '../../../../pattern-library/component.interface';
import {FallbackComponent} from '../../../../pattern-library/fallback/fallback.component';


@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.scss']
})
export class ComponentViewerComponent implements OnChanges {
  @ViewChild(ComponentHostDirective) componentHost: ComponentHostDirective;
  @Input() item: ContentModel;

  private timer: any;

  debug = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private renderComponent(): void {
    // Hack to get around issue where componentHost is not yet initialized, due to the ngIf not rendering the directive.
    if (this.componentHost) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component || FallbackComponent);
      const viewContainerRef = this.componentHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<ComponentInterface>componentRef.instance).data = this.item;
    } else {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.renderComponent();
      }, 0);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue) {
      this.renderComponent();
    }
  }

}
