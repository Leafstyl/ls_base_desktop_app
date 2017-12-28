import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContentModel } from '../../../core-ds/models/content-model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: ContentModel[];
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit() {
  }

}
