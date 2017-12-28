import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LandingComponent} from './landing.component';
import {ContentModel} from '../../../core-ds/models/content-model';
import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs/observable/of';


@Component({
  selector: 'app-component-viewer',
  template: ''
})
class MockComponentViewer {
  @Input() item: ContentModel;
}



describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  const MOCK_Items: ContentModel[] = [
    new ContentModel({name: 'one'}),
    new ContentModel({name: 'two'}),
    new ContentModel({name: 'three'})
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingComponent,
        MockComponentViewer
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              items: MOCK_Items
            })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.items).toBe(MOCK_Items);
  });

});
