import {SimpleChange} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SourceViewerComponent} from './source-viewer.component';
// import {HighlightJsService} from 'angular2-highlight-js';


describe('SourceViewerComponent', () => {
  let component: SourceViewerComponent;
  let fixture: ComponentFixture<SourceViewerComponent>;
  let highlightJsServiceStub:any;


  const MOCK_Data:string = '<p>foobar</p>';
  const MOCK_Type:string = 'html';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceViewerComponent ],
      providers: [
        // { provide: HighlightJsService, useValue: {
        //     highlight: () => {},
        //     foobar: false
        //   }
        // }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceViewerComponent);

    component = fixture.componentInstance;

    // highlightJsServiceStub = TestBed.get(HighlightJsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.code).toBeDefined();
  });

  it('should have bound values', () => {
    jasmine.clock().install();

    spyOn(highlightJsServiceStub, 'highlight');

    component.ngOnChanges({
      data: new SimpleChange(null, MOCK_Data, true),
      type: new SimpleChange(null, MOCK_Type, true)
    });

    fixture.detectChanges();
    jasmine.clock().tick(50);

    expect(component.safeInput).toEqual('&lt;p&gt;foobar&lt;/p&gt;');
    expect(highlightJsServiceStub.highlight).toHaveBeenCalled();
    jasmine.clock().uninstall();
  });
});
