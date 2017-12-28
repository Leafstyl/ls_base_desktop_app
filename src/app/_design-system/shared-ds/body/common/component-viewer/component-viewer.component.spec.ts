import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentViewerComponent} from './component-viewer.component';
import {ComponentHostDirective} from "../../details/component-host.directive";
import {Component, ComponentFactoryResolver, NgModule} from "@angular/core";
import {ContentModel} from "../../../../core/models/content-model";


@NgModule({
  declarations: [ ComponentHostDirective ]
})
export class MOCK_Module { }

@Component({
  selector: 'mock-component',
  template: ''
})
class MockComponent {
}


describe('ComponentViewerComponent', () => {
  let component: ComponentViewerComponent;
  let fixture: ComponentFixture<ComponentViewerComponent>;

  const MOCK_Model:ContentModel = new ContentModel({name: 'foobar', component: MockComponent});
  const MOCK_ComponentFactory:any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComponentViewerComponent,
        MockComponent
      ],
      imports: [ MOCK_Module ],
      providers: [
        {
          provide: ComponentFactoryResolver, useValue: {
            resolveComponentFactory: () => MOCK_ComponentFactory
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewerComponent);
    spyOn(TestBed.get(ComponentFactoryResolver), 'resolveComponentFactory').and.callThrough();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a component if a valid item is set', () => {
    console.log('FIXME - Not sure how to implement a repeating self canceling timeout');
    /*
    component.ngOnChanges({
      item: new SimpleChange(null, MOCK_Model, true)
    });
    fixture.detectChanges();
    expect(TestBed.get(ComponentFactoryResolver).resolveComponentFactory).toHaveBeenCalledWith(MOCK_Model.component);
    */
  });

});
