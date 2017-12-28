import {Component, OnInit} from '@angular/core';

import {ContentService} from '../../core-ds/services/content.service';
import {ContentModel} from '../../core-ds/models/content-model';
import {ResizeService} from '../services/resize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: ContentModel[];
  width = 0;

  constructor (
    private contentService: ContentService,
    private resizeService: ResizeService
  ) {}

  onSizeClick(size: string): void {
    switch (size) {
      case 's':
        this.resizeService.setSmall();
        break;
      case 'm':
        this.resizeService.setMedium();
        break;
      case 'l':
        this.resizeService.setLarge();
        break;
      case 'f':
        this.resizeService.setFull();
        break;
    }
  }

  onWidthChange(val: number): void {
    this.resizeService.setWidth(val);
  }

  onRandomToggle(): void {
    this.resizeService.randomRange = !this.resizeService.randomRange;
  }

  ngOnInit() {
    this.contentService.getContents()
      .subscribe(items => this.navItems = items);
    this.resizeService.width$
      .subscribe(width => this.width = width);
  }

}
