import {AfterContentInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';

import {ResizeService} from '../../services/resize.service';

import {fromEvent} from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss']
})
export class ResizableComponent implements AfterContentInit, OnDestroy {
  @Input() width: number;
  @Input() height: number;

  @ViewChild('contentContainer') container: ElementRef;
  @ViewChild('leftGrabber') leftGrabber: ElementRef;
  @ViewChild('rightGrabber') rightGrabber: ElementRef;

  private leftMouseDown$: any;
  private rightMouseDown$: any;
  private mouseMove$: any;
  private mouseUp$: any;

  private leftMouseSubscription: any;
  private rightMouseSubscription: any;

  constructor(private resizeService: ResizeService) {
  }

  private updateSize(delta: number): void {
    this.resizeService.setWidth(this.resizeService.getWidth() + delta);
  }

  ngAfterContentInit(): void {
    this.mouseUp$ = fromEvent(document, 'mouseup');
    this.mouseMove$ = fromEvent(document, 'mousemove');
    this.leftMouseDown$ = fromEvent(this.leftGrabber.nativeElement, 'mousedown');
    this.rightMouseDown$ = fromEvent(this.rightGrabber.nativeElement, 'mousedown');

    this.leftMouseSubscription = this.leftMouseDown$.subscribe(md => {
      md.preventDefault();
      this.mouseMove$.takeUntil(this.mouseUp$)
        .map(mm => mm.pageX)
        .pairwise()
        .subscribe(values => {
          this.updateSize(-(values[1] - values[0]));
        });
    });

    this.rightMouseSubscription = this.rightMouseDown$.subscribe(md => {
      md.preventDefault();
      this.mouseMove$.takeUntil(this.mouseUp$)
        .map(mm => mm.pageX)
        .pairwise()
        .subscribe(values => {
          this.updateSize((values[1] - values[0]));
        });
    });
  }

  ngOnDestroy(): void {
    this.leftMouseSubscription.unsubscribe();
    this.rightMouseSubscription.unsubscribe();
  }

}
