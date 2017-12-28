import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {of} from "rxjs/observable/of";

import {DetailsComponent} from './details.component';
import {ContentModel} from "../../../core/models/content-model";


@Component({
  selector: 'app-component-viewer',
  template: ''
})
class MockComponentViewer {
  @Input() item:ContentModel;
}


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const MOCK_Model:ContentModel = new ContentModel({name: 'foobar'});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsComponent,
        MockComponentViewer
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            data: of({item: MOCK_Model})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and set item based on route data', () => {
    expect(component).toBeTruthy();
    expect(component.item).toBe(MOCK_Model);
  });

});
