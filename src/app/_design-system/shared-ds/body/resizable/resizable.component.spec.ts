import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResizableComponent} from './resizable.component';
import {ResizeService} from "../../services/resize.service";

describe('ResizableComponent', () => {
  let component: ResizableComponent;
  let fixture: ComponentFixture<ResizableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableComponent ],
      providers: [
        {
          provide: ResizeService,
          useValue: {
            getWidth: () => {},
            setWidth: () => {}
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to set the width by dragging the left grabber', () => {
    const resizeSerivce:ResizeService = TestBed.get(ResizeService);

    spyOn(resizeSerivce, 'getWidth').and.returnValue(20);
    spyOn(resizeSerivce, 'setWidth');


    let mouseDownEvent:MouseEvent = new MouseEvent('mousedown');
    let mouseUpEvent:MouseEvent = new MouseEvent('mouseup');
    let mouseMoveEvent1:MouseEvent = new MouseEvent('mousemove',  {clientX: 11});
    let mouseMoveEvent2:MouseEvent = new MouseEvent('mousemove',  {clientX: 10});

    component.leftGrabber.nativeElement.dispatchEvent(mouseDownEvent);
    document.dispatchEvent(mouseMoveEvent1);
    document.dispatchEvent(mouseMoveEvent2);
    document.dispatchEvent(mouseUpEvent);

    expect(resizeSerivce.setWidth).toHaveBeenCalledWith(21);
  });

  it('should be able to set the width by dragging the right grabber', () => {
    const resizeSerivce:ResizeService = TestBed.get(ResizeService);

    spyOn(resizeSerivce, 'getWidth').and.returnValue(20);
    spyOn(resizeSerivce, 'setWidth');


    let mouseDownEvent:MouseEvent = new MouseEvent('mousedown');
    let mouseUpEvent:MouseEvent = new MouseEvent('mouseup');
    let mouseMoveEvent1:MouseEvent = new MouseEvent('mousemove',  {clientX: 10});
    let mouseMoveEvent2:MouseEvent = new MouseEvent('mousemove',  {clientX: 11});

    component.rightGrabber.nativeElement.dispatchEvent(mouseDownEvent);
    document.dispatchEvent(mouseMoveEvent1);
    document.dispatchEvent(mouseMoveEvent2);
    document.dispatchEvent(mouseUpEvent);

    expect(resizeSerivce.setWidth).toHaveBeenCalledWith(21);
  });
});
