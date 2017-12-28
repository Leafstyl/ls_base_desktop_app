import {Component, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs/observable/of';

import {HeaderComponent} from './header.component';
import {ContentService} from '../../core-ds/services/content.service';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material';

import {ContentModel} from '../../core-ds/models/content-model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResizeService} from '../services/resize.service';


@Component({
  selector: 'app-menu-item',
  template: ''
})
class MockMenuItemComp {
  @Input() items:any[];
}


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let contentServiceStub: any;
  let resizeServiceStub: any;

  const MOCK_Width: number = 459;
  const MOCK_Items: any[] = [
    new ContentModel({name: 'foo', children: []})
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MockMenuItemComp
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatCheckboxModule
      ],
      providers: [
        {
          provide: ContentService, useValue: {
            getContents: () => of(MOCK_Items)
          }
        },
        {
          provide: ResizeService, useValue: {
            width$: of(MOCK_Width),
            setSmall: () => {},
            setMedium: () => {},
            setLarge: () => {},
            setFull: () => {},
            setWidth: () => {},
            randomRange: false,
          }
        }
      ]
    })
    .compileComponents();

    contentServiceStub = TestBed.get(ContentService);
    resizeServiceStub = TestBed.get(ResizeService);

    spyOn(contentServiceStub, 'getContents').and.returnValue(of(MOCK_Items));

    spyOn(resizeServiceStub, 'setSmall');
    spyOn(resizeServiceStub, 'setMedium');
    spyOn(resizeServiceStub, 'setLarge');
    spyOn(resizeServiceStub, 'setFull');
    spyOn(resizeServiceStub, 'setWidth');

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init', () => {
    expect(component).toBeTruthy();

    component.ngOnInit();
    fixture.detectChanges();

    expect(contentServiceStub.getContents).toHaveBeenCalled();

    expect(component.navItems).toBe(MOCK_Items);
    expect(component.width).toBe(MOCK_Width);
  });

  it('should be able to toggle randomness', () => {
    expect(resizeServiceStub.randomRange).toBeFalsy();

    component.onRandomToggle();
    expect(resizeServiceStub.randomRange).toBeTruthy();

    component.onRandomToggle();
    expect(resizeServiceStub.randomRange).toBeFalsy();
  });

  it('should be able to handle a width change and update the resize service', () => {
    component.onWidthChange(495);
    expect(resizeServiceStub.setWidth).toHaveBeenCalledWith(495);
  });

  it('should be able to handle a size clicks', () => {
    expect(resizeServiceStub.setSmall.calls.count()).toEqual(0);
    expect(resizeServiceStub.setMedium.calls.count()).toEqual(0);
    expect(resizeServiceStub.setLarge.calls.count()).toEqual(0);
    expect(resizeServiceStub.setFull.calls.count()).toEqual(0);

    component.onSizeClick('s');
    component.onSizeClick('m');
    component.onSizeClick('l');
    component.onSizeClick('f');

    expect(resizeServiceStub.setSmall.calls.count()).toEqual(1);
    expect(resizeServiceStub.setMedium.calls.count()).toEqual(1);
    expect(resizeServiceStub.setLarge.calls.count()).toEqual(1);
    expect(resizeServiceStub.setFull.calls.count()).toEqual(1);
  });

});
