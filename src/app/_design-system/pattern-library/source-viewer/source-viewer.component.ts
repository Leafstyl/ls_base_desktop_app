import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
// import {HighlightJsService} from 'angular2-highlight-js';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
})
export class SourceViewerComponent implements OnChanges {

  @Input() data: string;
  @Input() type: string;

  @ViewChild('code', { read: ElementRef }) code: ElementRef;

  safeInput: string;

  constructor(
    // private highlightJsService: HighlightJsService
  ) { }

  private escape(input: string): string {
    return input.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  ngOnChanges(changes: SimpleChanges):void {
    if (changes.data.currentValue && changes.type.currentValue) {
      this.safeInput = this.escape(changes.data.currentValue);
      setTimeout(() => {
        // this.highlightJsService.highlight(this.code.nativeElement);
      });

    }
  }

}
